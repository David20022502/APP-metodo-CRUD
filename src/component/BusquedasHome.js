import React, {useEffect,useState} from 'react';
import ArtistCard from "./ArtistCard";
import '../css/BusquedasHome.css';
import MusicItem from "./MusicItem";
const BusquedasHome=({artistas,musicasdata,PlayMusic,changealbumPages,authUser})=>{
    return(
        <div className="containerBusequedas">
            {
                artistas && <div  style={{width:"100%"}}>
                    <h1 className="defaultTitlesobjectsbuscar">Artistas</h1>
                    <div className="separadorHomeapp">
                    </div>
                    <ArtistCard object={artistas[0]} changealbumPages={changealbumPages}/>})
                    }
                </div>
            }
            {
                musicasdata ?  <div style={{width:"100%"}}>
                    <h1 className="defaultTitlesobjectsbuscar">Canciones</h1>
                    <div className="separadorHomeapp">
                    </div>
                    {
                        musicasdata.map((Musica,index)=>{
                            return(
                                <MusicItem  key={index} Musica={Musica} PlayMusic={PlayMusic} index={index} authUser={authUser}/>
                            );
                        })
                    }
                </div>:
                    <h1 className="defaultTitlesobjectsbuscar">"Lo sentimos, no hay información"</h1>
            }
        </div>
    );
}
export default BusquedasHome;