import React, {useEffect, useState} from 'react';
import '../css/HomeApp.css';
import ArtistCard from "./ArtistCard";
import {db} from "../Firebase";
const HomeApp=({LikesDatabase})=>{
    const [GenrsDataBase,setGenrsDataBase]=useState(null);
    const[AuthorsDataBase,setAuthorsDataBase]=useState(null);
    useEffect(()=>{
        const gustostemporales = [];
        db.ref(`autores/`).on("value",(snapshot)=>{
            console.log("gustos traidos de la base",snapshot);
            snapshot.forEach((childSnapshot)=>{
                    const childId = childSnapshot.key;
                    const data = childSnapshot.val();
                    if(LikesDatabase.includes(data.genero)){
                        gustostemporales.push(data)
                    }
                }
            );
            setAuthorsDataBase(gustostemporales);
        });
    },[])
    useEffect(()=>{
        const getgeneros =async()=>{
            const gustostemporales = [];
            await db.ref(`genero/`).on("value",(snapshot)=>{
                snapshot.forEach((childSnapshot)=>{
                        const childId = childSnapshot.key;
                        const data = childSnapshot.val();
                        gustostemporales.push(data);

                    }
                );
                setGenrsDataBase(gustostemporales);
            });
            console.log("datos iteraccion",gustostemporales);
        }
        getgeneros();
    },[])
    return(
            <div id="mainConatinerHome" className="homeAppdiv">
                <h1 className="defaultTitlesobjects">Artistas destacados</h1>
                <div className="separadorHomeapp">
                </div>
                {
                    AuthorsDataBase && AuthorsDataBase.map((autor,index)=>{
                        return(
                            <ArtistCard object={autor} />

                        );
                    })
                }
                <h1 className="defaultTitlesobjects">Géneros</h1>
                <div className="separadorHomeapp">
                </div>
                    {
                        GenrsDataBase&&GenrsDataBase.map((genro,index)=>{
                            return(
                                <ArtistCard object={genro}/>

                            );
                        })
                    }
            </div>
    );
}
export default HomeApp;


