import React, {useEffect} from 'react';
import LogoItem from '../imgs/logomusicItem.jpg';
import '../css/ArtistCard.css';
import {Checkbox,Button} from "antd";
import {Link} from "react-router-dom";

const ArtistCard=({object,verCheckBox,onChange,index,addGenr,position,changealbumPages})=>{
    let dato;
    let value;
    useEffect(()=>{
        if(object.nombre){
             dato = object.nombre;
             value =true;
        }
        else {
             dato = object.genero;
             value=false;
        }
    })
    return(
        <div onClick={()=>changealbumPages(dato, object,value)} className="artistItemdiv">
            <div className="artistItem">
                <img src={object.enlace} alt="" style={{width:"100%",height:"100%",borderRadius: "15px",position:"absolute",cursor:"pointer"}}>
                </img>
                {
                    verCheckBox &&<Checkbox onChange={onChange} onClick={()=>addGenr(index,position)}  ></Checkbox>
                }
            </div>

            <h1 className="styleNameArtist">{object.nombre ? object.nombre :object.genero }</h1>

        </div>
    );
}
export default ArtistCard;