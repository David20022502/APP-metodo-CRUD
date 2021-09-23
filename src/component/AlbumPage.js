import React, {useEffect, useState} from 'react';
import {
    useHistory,
    useParams
} from "react-router";
import '../css/AlbumPage.css';
import ArtistCard from "./ArtistCard";
import MusicItem from "./MusicItem";
import WaitingPage from "./WaitingPage";
import {db} from "../Firebase";
const AlbumPage=({PlayMusic,authUser,Favorites,handleUpdateFavoritos,setMusicsMain}) =>{
    const {artist} =useParams();
    const {genre} =useParams();
    const [Musics,setMusics] =useState(null);
    const [ObjectArtistGenre,setObjectArtistGenre]=useState(null);
    useEffect(()=>{
        if(artist){
            getMusics(artist);
            getArtistInfo(artist);
            console.log("holaaaa");
        }
        else {
            getMusics(genre);
            getGenreInfo(genre);
        }

    },[])
    useEffect(()=>{
        if (Musics) {
            if (Musics.length === 0) {
                setMusics(false);
            }
        }
        setMusicsMain(Musics);
    },[Musics])
    const getMusics =async (NameArtist)=> {
        const temporaryMusics = [];
            await db.ref(`musicas/`).on("value", (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                        const childId = childSnapshot.key;
                        const data = childSnapshot.val();
                        const name = data.nombre;
                        const genre = data.genero;
                        const author = data.autor;
                        if (name.toLowerCase().includes(NameArtist.toLowerCase()) === true ||
                            genre.toLowerCase().includes(NameArtist.toLowerCase()) === true ||
                            author.toLowerCase().includes(NameArtist.toLowerCase()) === true) {
                            temporaryMusics.push(data);
                        }
                    }
                );
                setMusics(temporaryMusics);
            });
    }
    const getArtistInfo=async (NameArtist)=>{
        const temporaryAuthors = [];
        await db.ref(`autores/`).on("value",(snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                    const childId = childSnapshot.key;
                    const data = childSnapshot.val();
                    const name =data.nombre;
                    if(name.toLowerCase()===NameArtist.toLowerCase()){
                        temporaryAuthors.push(data);
                    }
                }
            );
            setObjectArtistGenre(temporaryAuthors);
        });
    }
    const getGenreInfo=async (Genre)=>{
        const temporaryGenrs = [];
        await db.ref(`genero/`).on("value",(snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                    const childId = childSnapshot.key;
                    const data = childSnapshot.val();
                    const genre =data.genero;
                    //console.log(NOMBRE,GENERO,AUTOR);
                    if(genre.toLowerCase()===Genre.toLowerCase()){
                        temporaryGenrs.push(data);
                    }
                }
            );
            setObjectArtistGenre(temporaryGenrs);
        });
    }
    return(
    <div className="containerBusequedasalbumes">
        {
            ObjectArtistGenre == null ?  <WaitingPage/>: <div  style={{width:"100%", display:"flex",justifyContent:"center"}}>
                <ArtistCard object={ObjectArtistGenre[0]}/>
            </div>
        }
        {
            Musics===null ? <WaitingPage/>:Musics === false ? <div>No hay Información...</div>: <div style={{width:"100%"}}>
                <div className="separadorHomeapp">
                </div>
                {
                    Musics.map((Musica,index)=>{
                        return(
                            <MusicItem  key={index} Musica={Musica} PlayMusic={PlayMusic} index={index} authUser={authUser} Favorites={Favorites} handleUpdateFavoritos={handleUpdateFavoritos} />
                        );
                    })
                }
            </div>
        }
    </div>
);
}
export default AlbumPage;