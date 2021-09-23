import React, {useEffect, useState} from 'react';
import LogoItem from '../imgs/logomusicItem.jpg';
import {
    HeartOutlined,
    PlayCircleOutlined
} from '@ant-design/icons';
import '../css/MusicItem.css';
import {Button} from "antd";
import {db} from "../Firebase";
const MusicItem =({Musica,PlayMusic,index,authUser,Favorites,handleUpdateFavoritos})=>{

    const [SeeFavorites,setSeeFavorites]=useState(null);
    const [IsChangingFavoritos,setIsChangingFavoritos]=useState(null);
    useEffect(()=>{
        const values = getverFavoritos();
        setSeeFavorites(values.favorito);
    })
    useEffect(()=>{
        if(IsChangingFavoritos!==null){
            const verEstado = getverFavoritos();
            if(verEstado.favorito===false){
                handleAdd();
                handleUpdateFavoritos();
            }
            else {
                handleDellete(verEstado);
                handleUpdateFavoritos();
              //  getFavoriteSongs();
            }
        }
    },[IsChangingFavoritos])
    const getverFavoritos=()=>{
        let values={
            favorito:false,
            id:null
        };
        if (Favorites) {
            Favorites.forEach((element) => {
                if (element.idcancion === Musica.id) {
                    values.favorito = true;
                    values.id = element.id;
                    //break;
                }
            });
        }
        return values;
    }
    const handleAdd=async ()=>{
        const idu=authUser.uid;
        const allFavorites = await db.ref(`favoritos/${idu}`);
        const newAllfavoritos =await allFavorites.push();
        await newAllfavoritos.set({
            iduser:idu,
            idcancion:Musica.id
        });
    }
    const handleDellete=async (verEstado)=>{
        await db.ref(`favoritos/${authUser.uid}/${verEstado.id}`).remove();
    }
    const addFavoritos=()=>{
        setSeeFavorites(!SeeFavorites);
        setIsChangingFavoritos(!IsChangingFavoritos);
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
                        SeeFavorites===true ? <HeartOutlined className="heartMusic" onClick={addFavoritos} style={{color:"red",fontSize:"20px",cursor:"pointer"}} />:
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
