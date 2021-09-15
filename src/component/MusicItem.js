import React, {useEffect, useState} from 'react';
import LogoItem from '../imgs/logomusicItem.jpg';
import {
    HeartOutlined,
    PlayCircleOutlined
} from '@ant-design/icons';
import '../css/MusicItem.css';
import {Button, Modal} from "antd";
import {db} from "../Firebase";
import WaitingPage from "./WaitingPage";
const MusicItem =({Musica,PlayMusic,index,authUser,favoritos})=>{
    let favoritostemp;
    const [verFavoritos,setverFavoritos]=useState(null);
    const[eliminarFavorito,seteliminarFavorito]=useState(null);
    useEffect(()=>{
        if(favoritos){
            favoritostemp = favoritos.map((item,index)=>{
                return(item.idcancion);
            })
            if(favoritostemp.includes(Musica.id)===false){
                setverFavoritos(false);
            }
            else {
                setverFavoritos(true);
            }
        }
        else {
            favoritostemp=[];
        }
    },[])
    useEffect(()=>{
        if(eliminarFavorito!==null){
            eliminarDB();
        }
    },[eliminarFavorito])
    useEffect(()=>{
        if(verFavoritos!==null){
            eliminarDB();
        }
    },[verFavoritos])
    const eliminarDB=async ()=>{
        if(verFavoritos===true){
            const idu=authUser.uid;
            const allFavorites = db.ref(`favoritos/${idu}`);
            const newAllfavoritos =allFavorites.push();
            await newAllfavoritos.set({
                iduser:idu,
                idcancion:Musica.id
            });
        }
        else{
            if(favoritostemp) {
                const positionElemn = favoritostemp.indexOf(Musica.id);
                seteliminarFavorito(positionElemn);
            }
        }
    }
    const addFavoritos=async()=>{
       // const element = document.getElementsByClassName("heartMusic");
        //element[index].style.color="white";
        setverFavoritos(!verFavoritos);
           /* if(favoritostemp.includes(Musica.id)===false){
                const idu=authUser.uid;
                const allFavorites = db.ref(`favoritos/${idu}`);
                const newAllfavoritos =allFavorites.push();
                await newAllfavoritos.set({
                    iduser:idu,
                    idcancion:Musica.id
                });
            }
            else {
                const positionElemn=favoritostemp.indexOf(Musica.id);
                seteliminarFavorito(positionElemn);
            }*/
    }
    return(
        <div className="ContainerMusicItem">
            <div className="detailsMusic">
                <div className="containerIMGitem">
                    <img src={LogoItem} alt="Item" className="ImgItem"/>
                    <Button shape="circle" icon={<PlayCircleOutlined />} style={{margin:"auto"}} onClick={()=>PlayMusic(index,Musica.id)}/>
                </div>
                <div className="defaultSize">
                    <h1 className="defaultStyle">
                        {Musica.nombre}
                    </h1>
                </div>
                <div className="defaultSize">
                    {
                        verFavoritos ? <HeartOutlined className="heartMusic" onClick={addFavoritos} style={{color:"red",fontSize:"20px",cursor:"pointer"}} />:
                            <HeartOutlined className="heartMusic" onClick={addFavoritos} style={{color:"white",fontSize:"20px",cursor:"pointer"}} />

                    }
                        </div>
                <div className="defaultSize">
                    <h1  className="defaultStyle">
                        {Musica.genero}
                    </h1>
                </div>
                <div className="defaultSize">
                    <h1  className="defaultStyle">
                        {Musica.autor}
                    </h1>
                </div>
            </div>
            <div className="separetor">

            </div>
        </div>
    );
}
export default MusicItem;
/*<Button shape="circle" icon={<PlayCircleOutlined />} style={{margin:"auto"}} onClick={()=>PlayMusic(index,Musica.id)}/>
              */