import React, {useEffect} from 'react';
import '../css/ArtistCard.css';
import {Checkbox,Button} from "antd";
import {
    useHistory
} from "react-router";

const ArtistCard=({firstTime,object,verCheckBox,onChange,index,addGenr,position})=>{
    const history = useHistory();
    let dato;
    let value;
    useEffect(()=>{
        if(object){
            if(object.nombre){
                dato = object.nombre;
                value =true;
            }
            else {
                dato = object.genero;
                value=false;
            }
        }

    },[])
    const changeAlbumArtist=()=>{
        if(object.nombre){
            history.push(`/artist/${object.nombre}`);
        }
        else {
            history.push(`/genre/${object.genero}`);
        }

        //changealbumPages(dato, object,value);
    }
    const functionNull=()=>{

    }
    return(
        <div onClick={firstTime===true ? functionNull:changeAlbumArtist} className="artistItemdiv">
            <div className="artistItem">
                <img src={object&&object.enlace} alt="" style={{width:"100%",height:"100%",borderRadius: "15px",position:"absolute",cursor:"pointer"}}>
                </img>
                {
                    verCheckBox &&<Checkbox onChange={onChange} onClick={()=>addGenr(index,position)}  ></Checkbox>
                }
            </div>
            <h1 className="styleNameArtist">{object ? object.nombre ? object.nombre :object.genero:<h1></h1> }</h1>

        </div>
    );
}
export default ArtistCard;