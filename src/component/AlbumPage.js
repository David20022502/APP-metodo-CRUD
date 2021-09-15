import React, {useEffect} from 'react';
import '../css/AlbumPage.css';
import ArtistCard from "./ArtistCard";
import MusicItem from "./MusicItem";
const AlbumPage=({artistas,musicasdata,PlayMusic,authUser,favoritos}) =>{
    useEffect(()=>{
        console.log("entro a la pagina de albumes");
        console.log("y el artistia selleccionado es",artistas);
    })
return(
    <div className="containerBusequedasalbumes">
        {
            artistas && <div  style={{width:"100%", display:"flex",justifyContent:"center"}}>
                <ArtistCard object={artistas}/>
            </div>
        }
        {
            musicasdata &&  <div style={{width:"100%"}}>
                    <div className="separadorHomeapp">
                    </div>
                    {
                        musicasdata.map((Musica,index)=>{
                            return(
                                <MusicItem  key={index} Musica={Musica} PlayMusic={PlayMusic} index={index} authUser={authUser} favoritos={favoritos} />
                            );
                        })
                    }
                </div>
        }
    </div>
);
}
export default AlbumPage;