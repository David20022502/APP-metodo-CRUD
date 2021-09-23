import React, {useEffect,useState} from 'react';
import ArtistCard from "./ArtistCard";
import {
    useHistory,
    useParams
} from "react-router";
import '../css/BusquedasHome.css';
import MusicItem from "./MusicItem";
import {db} from "../Firebase";
const BusquedasHome=({PlayMusic,changealbumPages,authUser,Favorites,handleUpdateFavoritos,setMusicsMain})=>{
    const {valueSearch} = useParams();
    const [Musics,setMusics] =useState(null);
    const [Artist,setArtist]=useState(null);
    useEffect(()=>{
        getMusics(valueSearch);
        getArtistInfo(valueSearch);
    },[valueSearch])
    useEffect(()=>{
        if (Musics) {
            if (Musics.length === 0) {
                setMusics(false);
            }
        }
        console.log("las nuevas cacniones son",Musics);
        console.log("el nuevo artista es",Artist);
        setMusicsMain(Musics)
    },[Musics])
    const getMusics =async (NameArtist)=> {
        const temporaryMusics = [];
        if (valueSearch) {
            await db.ref(`musicas/`).on("value", (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                        const childId = childSnapshot.key;
                        const data = childSnapshot.val();
                        const NOMBRE = data.nombre;
                        const GENERO = data.genero;
                        const AUTOR = data.autor;
                        //console.log(NOMBRE,GENERO,AUTOR);
                        if (NOMBRE.toLowerCase().includes(NameArtist.toLowerCase()) === true ||
                            GENERO.toLowerCase().includes(NameArtist.toLowerCase()) === true ||
                            AUTOR.toLowerCase().includes(NameArtist.toLowerCase()) === true) {
                            temporaryMusics.push(data);
                        }
                    }
                );
                setMusics(temporaryMusics);
            });
        }
    }
    const getArtistInfo=async (NameArtist)=>{
        const temporaryAuthors = [];
        await db.ref(`autores/`).on("value",(snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                    const childId = childSnapshot.key;
                    const data = childSnapshot.val();
                    const name =data.nombre;
                    //console.log(NOMBRE,GENERO,AUTOR);
                    if(name.toLowerCase()===NameArtist.toLowerCase()){
                        temporaryAuthors.push(data);
                    }
                }
            );
            setArtist(temporaryAuthors);
        });
    }
    return(
        <div className="containerBusequedas">

            {
                Artist !==null ? Artist.length!==0 ? <div  style={{width:"100%"}}>
                    <h1 className="defaultTitlesobjectsbuscar">Artistas</h1>
                    <div className="separadorHomeapp">
                    </div>
                    <ArtistCard object={Artist[0]} changealbumPages={changealbumPages}/>})
                    }
                </div>:<div></div>:<div></div>
            }
            {
                Musics ?  <div style={{width:"100%"}}>
                    <h1 className="defaultTitlesobjectsbuscar">Canciones</h1>
                    <div className="separadorHomeapp">
                    </div>
                    {
                        Musics.map((Musica,index)=>{
                            return(
                                <MusicItem  key={index} Musica={Musica} PlayMusic={PlayMusic} index={index} authUser={authUser} Favorites={Favorites} handleUpdateFavoritos={handleUpdateFavoritos}/>
                            );
                        })
                    }
                </div>:
                    <h1 className="defaultTitlesobjectsbuscar">"Lo sentimos, no se encontraron resultados"</h1>
            }
        </div>
    );
}
export default BusquedasHome;