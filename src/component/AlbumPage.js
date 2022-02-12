import React, {useEffect, useState} from 'react';
import {
    useHistory,
    useParams
} from "react-router";
import '../css/AlbumPage.css';
import MusicItem from "./MusicItem";
import {
    getAlbum,
    getArtis,
    getMusicsfromArtist, getResultsFromSearch, getSongsAlbumes,
    separar
} from "../conection/Conections";
const AlbumPage=({PlayMusic}) =>{
    //se pasa el id del album y el nombre del artista para desplegar su informacion
    const {artist} =useParams();
    const {album} =useParams();
    //se crea un useState para almaceanr las cacniones ya sea del album o del artista y tambien se guarda la información del artista/album
    const [Musics,setMusics] =useState(null);
    const [ObjectArtistGenre,setObjectArtistGenre]=useState(null);
    useEffect(()=>{
        //se verifica si es un artista o un album y dependiendo de eso se despliega la información
        if(artist){
            //se cargar las canciones y la info del album
            const artistfounded = getArtis(artist);
            setObjectArtistGenre(artistfounded);
            const musicsFounded = getMusicsfromArtist(artist);
            setMusics(musicsFounded);
            document.title=`${artistfounded.artist+" "}| Iden x`;

        }
        else {
            //si no es un artista es un album y se despliega sus datos
            console.log("album",album);
            const albumFounded =getAlbum(album);
            setObjectArtistGenre(albumFounded);
            const albumSongsFound = getSongsAlbumes(album);
            setMusics(albumSongsFound);
            //document.title=`${albumFounded.nameAlbum+" "}| Iden x`;
        }

    },[])
    return(
    <div className="containerBusequedasalbumes">
     <div style={{display:"flex"}}>
         <div className="containerImgArtist_Album" style={{display:"flex",flexDirection:"column"}}>
             <img style={{width:"350px",height:"350px"}} src={ObjectArtistGenre &&( artist ? separar(ObjectArtistGenre.urlImageartist):separar(ObjectArtistGenre.urlImageAlbum))} alt=""/>
             {
                 <div className="typeAlbum" style={{margin:"10px auto"}}>
                     {artist? "CANCIONES MÁS POPULARES":"CANCIONES"}
                 </div>
             }

         </div>
         <div className="containerInfoAlbum_Artist">
             {
                 <div className="typeAlbum">
                     {
                         artist ? "ARTISTA":"ÁLBUM"
                     }
                 </div>
             }

             <div className="nameArtist_Album">
                 {
                     ObjectArtistGenre && (ObjectArtistGenre.artist ? ObjectArtistGenre.artist: ObjectArtistGenre.nameAlbum)
                 }
             </div>
             <div style={{display:"flex",alignItems:"center"}}>
                 <div>
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                         <title>Headphones</title>
                         <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                             <g id="Headphones">
                                 <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
                                 <rect id="Rectangle" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" x="15" y="14" width="6" height="7" rx="3"></rect>
                                 <path d="M3,17 C3,15.3431 4.34315,14 6,14 L6,14 C7.65685,14 9,15.3431 9,17 L9,18 C9,19.6569 7.65685,21 6,21 L6,21 C4.34315,21 3,19.6569 3,18 L3,17 Z" id="Path" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path>
                                 <path d="M21,18 L21,11 C21,6.58172 17.4183,3 13,3 L11,3 C6.58172,3 3,6.58172 3,11 L3,18" id="Path" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path>
                             </g>
                         </g>
                     </svg>
                 </div>
                 <div className="fullMusicsAlbum_Artist">
                     {ObjectArtistGenre&&ObjectArtistGenre.fullMusics } CANCIONES EN TOTAL
                 </div>
             </div>
             <div className="containerControllerAlbum_Artist">
                 <div className="containerButtomsaAlbum_Artist">
                     <svg width="40px" height="40px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                         <title>Play</title>
                         <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                             <g id="Play">
                                 <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
                                 <path d="M17.3371,12.4218 L7.76844,18.511 C7.43558,18.7228 7,18.4837 7,18.0892 L7,5.91084 C7,5.51629 7.43558,5.27718 7.76844,5.48901 L17.3371,11.5782 C17.6459,11.7746 17.6459,12.2254 17.3371,12.4218 Z" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                             </g>
                         </g>
                     </svg>
                 </div>
                 <div className="containerButtomsaAlbum_Artist"  style={{padding:"10px"}}>
                     <svg width="30px" height="30px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                         <title>Shuffle-Play</title>
                         <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                             <g id="Shuffle-Play">
                                 <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
                                 <path d="M3,6 L5,6 C8.31371,6 11,8.68629 11,12 L11,12 C11,15.3137 8.31371,18 5,18 L3,18" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                                 <path d="M20,6 L17,6 C13.6863,6 11,8.68629 11,12 L11,12 C11,15.3137 13.6863,18 17,18 L20,18" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                                 <path d="M18,3 L20.2929,5.29289 C20.6834,5.68342 20.6834,6.31658 20.2929,6.70711 L18,9" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                                 <path d="M18,15 L20.2929,17.2929 C20.6834,17.6834 20.6834,18.3166 20.2929,18.7071 L18,21" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                             </g>
                         </g>
                     </svg>
                 </div>
                 <div className="containerButtomsaAlbum_Artist" style={{padding:"10px"}}>
                     <svg width="30px" height="30px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                         <title>Heart</title>
                         <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                             <g id="Heart">
                                 <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
                                 <path d="M19.4558,12.7507 C21.5147,10.7488 21.5147,7.50319 19.4558,5.50135 C17.397,3.4995 14.0588,3.49958 11.9999975,5.50142 C9.94109,3.49958 6.60301,3.49958 4.54415,5.50142 C2.48528,7.50326 2.48528,10.7489 4.54415,12.7507 C4.55132,12.7577 4.55851,12.7647 4.56571,12.7716 L11.9999975,20.0000012 L19.4558,12.7507 Z" id="Shape" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                             </g>
                         </g>
                     </svg>
                 </div>
             </div>
         </div>
     </div>
        <div className="containerMusicsItemsAlbum">
            <div style={{width:"800px",display:"flex",flexDirection:"column",margin:"0 auto"}}>
                {
                    Musics && Musics.map((element,index)=>{
                        if(index%2==0){
                            return <MusicItem PlayMusic={PlayMusic} object={element} position={index+1} colores={true} visibleTreePoints={true}/>
                        }
                        else{
                            return <MusicItem PlayMusic={PlayMusic} object={element} position={index+1} colores={false} visibleTreePoints={true}/>
                        }
                    })
                }
            </div>

        </div>

    </div>
);
}
export default AlbumPage;
