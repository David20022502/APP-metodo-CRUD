import React, {useEffect, useState} from 'react';
import '../css/miCuenta.css';
import LogoItem from '../imgs/imgUsercount.png';
import ArtistCard from "./ArtistCard";
import {db} from "../Firebase";
const MiCuenta =({authUser,gustosdatabase})=>{
    const[generosData,setGenerosData]=useState(null);
    const[usuario,setUsuario]=useState(null);
    useEffect(()=>{
        db.ref(`users/${authUser.uid}`).on("value",(snapshot)=>{
            console.log("gustos traidos de la base",snapshot);
            setUsuario(snapshot.val());
            console.log("user data",snapshot.val());
            /*snapshot.forEach((childSnapshot)=>{
                    const childId = childSnapshot.key;
                    const data = childSnapshot.val();
                    setUsuario(data)
                console.log("user data",data);
                }
            );*/
        });
    },[])
    useEffect(()=>{
        const gustostemporales = [];
        db.ref(`genero/`).on("value",(snapshot)=>{
            console.log("gustos traidos de la base",snapshot);
            snapshot.forEach((childSnapshot)=>{
                    const childId = childSnapshot.key;
                    const data = childSnapshot.val();
                    if(gustosdatabase.includes(data.genero)){
                        gustostemporales.push(data)
                    }
                    //console.log("autores",data);
                }
            );
            setGenerosData(gustostemporales);
        });
    },[])
    const [generos,setGeneros]=useState(genre);
    return(
        <div className="containerCuenta">
            <h1 className="defaultTitles">Mi perfil</h1>
            <div className="separadorHomeapp">
            </div>
            <div className="containerInformation">
                <img src={LogoItem} alt="" className="imgUsercount"/>
                <div className="containerTextInformation">
                    <div className="textItem">
                        <h1 className="informationTextDefault">Usuario:</h1>
                        <h1 className="informationTextDefault">{usuario && usuario.fullName}</h1>
                    </div>
                    <div className="textItem">
                        <h1 className="informationTextDefault">Email:</h1>
                        <h1 className="informationTextDefault">{usuario && usuario.email}</h1>
                    </div>
                    <div className="textItem">
                        <h1 className="informationTextDefault">Edad:</h1>
                        <h1 className="informationTextDefault">{usuario && usuario.birthday}</h1>
                    </div>
                </div>
            </div>
            <h1 style={{textAlign:"center",width:"100%"}} className="defaultTitles">Géneros que te gustan</h1>
            <div className="separadorHomeapp">
            </div>
            {
                generosData && generosData.map((genro,index)=>{
                    return(
                        <ArtistCard object={genro}/>

                    );
                })
            }
        </div>
    );
}
export default MiCuenta;
const  genre=[
    {
        "id": "901",
        "genero": "nightcore",
        "enlace": "https://i1.sndcdn.com/artworks-000208284301-2jb7rj-t500x500.jpg"
    },

    {
        "id": "902",
        "genero": "cumbia",
        "enlace": "https://m.media-amazon.com/images/I/81HQ4euMsvL._SS500_.jpg"
    },

    {
        "id": "903",
        "genero": "electronica",
        "enlace": "https://i1.sndcdn.com/artworks-000046667360-v9zkxu-t500x500.jpg"
    },
    {
        "id": "904",
        "genero": "balada",
        "enlace": "https://i1.sndcdn.com/artworks-000128187888-rld6ww-t500x500.jpg"
    },

    {
        "id": "905",
        "genero": "bachata",
        "enlace": "https://i.pinimg.com/originals/da/c6/6e/dac66e8da9dd14005a1e16a06782cd42.jpg"
    },

    {
        "id": "906",
        "genero": "regueton",
        "enlace": "https://i1.sndcdn.com/artworks-000232551310-ufpmbn-t500x500.jpg"
    },

    {
        "id": "907",
        "genero": "rock",
        "enlace": "https://i.pinimg.com/originals/2f/e7/ab/2fe7ab21854b4b6cf29686700eca9298.png"
    },

    {
        "id": "908",
        "genero": "rap",
        "enlace": "https://i1.sndcdn.com/avatars-yQkNtBFwyMmolDgf-zFetdQ-t500x500.jpg"
    }
]