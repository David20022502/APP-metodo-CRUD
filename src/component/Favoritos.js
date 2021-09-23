import MusicItem from "./MusicItem";
import React, {useEffect, useState} from "react";
import WaitingPage from "./WaitingPage";
import {db} from "../Firebase";
const Favoritos=({Favorites,PlayMusic,authUser, handleUpdateFavoritos})=>{
    const [FavoritesInfo,setFavoritesInfo]=useState(null);
    const [FavoritesSongs,setFavoritesSongs]=useState(null);
    useEffect(()=>{
        getFavoritosData();
    },[])
    useEffect(()=>{
        if(FavoritesInfo){
            getFavoriteSongs();
        }
        console.log("favoritos desde dentro",FavoritesSongs);
    },[FavoritesInfo])
    const getFavoritosData=async ()=>{
        const favoritosTemporal=[]
        await db.ref(`favoritos/${authUser.uid}`).on("value",(snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                    const childId = childSnapshot.key;
                    const data = childSnapshot.val();
                    const dataDb={
                        id:childId,
                        idcancion:data.idcancion,
                        iduser:data.iduser
                    }
                    favoritosTemporal.push(dataDb)
                }
            );
            setFavoritesInfo(favoritosTemporal);
        });
    }
    const getFavoriteSongs=async ()=>{
        const songsFavoritos=[]
         FavoritesInfo.forEach((elemt,ide)=>{
             db.ref(`musicas/${elemt.idcancion}`).on('value',(snapshot)=>{
                songsFavoritos.push(snapshot.val());
            });
        });
        setFavoritesSongs(songsFavoritos);
    }
    return(
        <>
            <h1 className="defaultTitlesobjectsbuscar">Canciones</h1>
            <div className="separadorHomeapp">
            </div>
            {
                FavoritesSongs !==null? FavoritesSongs ===false ? <div>no hay cacniones</div> :FavoritesSongs.map((Musica,index)=>{
                    return(
                        <MusicItem  key={index} Musica={Musica} PlayMusic={PlayMusic} index={index} authUser={authUser} Favorites={Favorites} handleUpdateFavoritos={handleUpdateFavoritos} getFavoriteSongs={getFavoriteSongs} />
                    );
                }):<WaitingPage/>
            }
        </>
    );
}
export default Favoritos;