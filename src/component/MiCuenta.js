import React, {useEffect, useState} from 'react';
import '../css/miCuenta.css';
import ArtistCard from "./ArtistCard";
import {db} from "../Firebase";
const MiCuenta =({authUser,LikesDatabase})=>{
    const[GenrsDataBase,setGenrsDataBase]=useState(null);
    const[User,setUser]=useState(null);
    useEffect(()=>{
        db.ref(`users/${authUser.uid}`).on("value",(snapshot)=>{
            console.log("gustos traidos de la base",snapshot);
            setUser(snapshot.val());
            console.log("user data",snapshot.val());
        });
    },[])
    useEffect(()=>{
        const gustostemporales = [];
        db.ref(`genero/`).on("value",(snapshot)=>{
            console.log("gustos traidos de la base",snapshot);
            snapshot.forEach((childSnapshot)=>{
                    const childId = childSnapshot.key;
                    const data = childSnapshot.val();
                    if(LikesDatabase.includes(data.genero)){
                        gustostemporales.push(data)
                    }
                }
            );
            setGenrsDataBase(gustostemporales);
        });
    },[])
    return(
        <div className="containerCuenta">
            <h1 className="defaultTitles">Mi perfil</h1>
            <div className="separadorHomeapp">
            </div>
            <div className="containerInformation">
                <div style={{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <img src={User && User.imgUrlUser} alt="" style={{width:"150px",height:"150px",borderRadius:"50%"}}/>
                </div>
                <div className="containerTextInformation">
                    <div className="textItem">
                        <h1 className="informationTextDefault">Usuario:</h1>
                        <h1 className="informationTextDefault">{User && User.fullName}</h1>
                    </div>
                    <div className="textItem">
                        <h1 className="informationTextDefault">Email:</h1>
                        <h1 className="informationTextDefault">{User && User.email}</h1>
                    </div>
                </div>
            </div>
            <h1 style={{textAlign:"center",width:"100%"}} className="defaultTitles">Géneros que te gustan</h1>
            <div className="separadorHomeapp">
            </div>
            {
                GenrsDataBase && GenrsDataBase.map((genro,index)=>{
                    return(
                        <ArtistCard object={genro}/>

                    );
                })
            }
        </div>
    );
}
export default MiCuenta;
