import React, {useEffect, useState} from 'react';
import Repetir from "../imgs/repetir.png";
import Aleatorio from "../imgs/aleatorio.png";
import LogoItem from "../imgs/logomusicItem.jpg";
import {Button, Popover} from "antd";
import Prev from "../imgs/prev.png";
import Next from "../imgs/next.png";
import InfoItem from "../imgs/infoItem.png";
import {SoundOutlined} from "@ant-design/icons";
import '../css/ControlMusic.css';
import ImgController from '../imgs/Imagenes';
const ControlMusic =({changevolumenMusic,currentMusic,timeProgres,getCurrentTime,currentTimeMusicc,PrevMusic,playy,nextMusic})=>{
    const [IsPlaying,setIsPlaying]=useState(false);
    const [IsFirstTime,setIsFirstTime]=useState(true);
    const changePausePlay=()=>{
        if(currentMusic!==null){
            setIsPlaying(!IsPlaying);
        }
    }
    useEffect(()=>{
        if(timeProgres!==0 && IsFirstTime===true){
            setIsPlaying(true);
            setIsFirstTime(false);
        }
    })
    const content = (
        <div style={{width:"300px", display:"flex",flexDirection:"column"}}>
            <div style={{width:"100%",display:"flex",flexDirection:"row",padding:"5px"}}>
                <img src={LogoItem} alt="" style={{width:"65px",height:"65px"}}/>
                <div style={{width:"100%",display:"flex",flexDirection:"column",padding:"0 5px",justifyContent:"center"}}>
                    <div style={{width:"100%",display:"flex",flexDirection:"row"}}>
                        <h1 className="defaultStyleParams">Título:</h1>
                        <h1 className="defaultStyleAnswers">{currentMusic &&currentMusic.nombre}</h1>
                    </div>
                    <div style={{width:"100%",display:"flex",flexDirection:"row"}}>
                        <h1 className="defaultStyleParams">Autor:</h1>
                        <h1 className="defaultStyleAnswers">{currentMusic &&currentMusic.autor}</h1>
                    </div>
                </div>
            </div>
            <div style={{marginTop:"5px"}} className="separadorHomeapp"></div>
            <div style={{width:"100%",display:"flex",flexDirection:"row"}}>
                <h1 className="defaultStyleParams">Género:</h1>
                <h1 className="defaultStyleAnswers">{currentMusic &&currentMusic.genero}</h1>
            </div>
            <div style={{width:"100%",display:"flex",flexDirection:"row"}}>
                <h1 className="defaultStyleParams">Duración:</h1>
                <h1 className="defaultStyleAnswers">{currentMusic &&getCurrentTime(currentTimeMusicc)}</h1>
            </div>
        </div>
    );
    return(
        <div className="containerControls">

            <div className="controlLopp">
                <div style={{display:"flex"}}>
                    <SoundOutlined style={{fontSize:"15px", color:"white", margin: "10px auto"}} />
                    <input  type="range"  onChange={changevolumenMusic}  step="any" className="range" />
                </div>
                <div style={{display:"flex"}}>
                    <img src={Repetir} alt="" className="imgeLoop" />
                    <img src={Aleatorio} alt="" className="imgeLoop"/>
                </div>

            </div>
            <div className="controlProgres">

                <div className="silder-container">
                    <div className="progressBar1">
                        <div className="secondprogres" id="secondprogres1">
                        </div>
                    </div>
                    <div style={{display:"flex",width:"100%"}}>
                        {currentMusic &&<div style={{marginRight:"auto",paddingLeft:"10px"}} className="defaultStyle">{timeProgres}</div>}
                        {currentMusic &&<div style={{marginLeft:"auto",textAlign:"end",paddingRight:"10px"}} className="defaultStyle">{getCurrentTime(currentTimeMusicc)}</div>}
                    </div>
                </div>
                {currentMusic &&<div className="defaultStyle">{currentMusic.nombre}</div>}

            </div>
            <div className="controlButtons">
                <div
                    className="containerImgItem"
                >
                    <img src={LogoItem} alt="" className="itemLogoMusic"/>
                </div>
                <div
                >
                    <Button
                        style={{background:"transparent",border: "none",padding:"0",height:"40px"}}
                        onClick={PrevMusic}
                    >
                        <img src={Prev} alt="" style={{width:"60px",height:"40px"}}/>
                    </Button>
                    <Button
                        onClick={playy}
                        style={{background:"transparent",border: "none",padding:"0",height:"50px",position:"relative" }}
                    >
                        {
                            IsPlaying===true ?  <img onClick={changePausePlay} id="PlayIMG" src={ImgController.Pause} alt="" style={{width:"100px",height:"50px",cursor:"pointer"}}/>:
                                <img onClick={changePausePlay} id="PlayIMG" src={ImgController.Play} alt="" style={{width:"100px",height:"50px",cursor:"pointer"}}/>
                        }
                    </Button>

                    <Button
                        style={{background:"transparent",border: "none",padding:"0",height:"40px"}}
                        onClick={nextMusic}
                    >
                        <img src={Next} alt="" style={{width:"60px",height:"40px"}}/>
                    </Button>
                </div>
                <Popover style={{backround:"blue",backgroundColor:"red"}} content={content} title="Información" trigger="click">
                    <Button
                        style={{background:"transparent",
                            border: "none",padding:"0",
                            height:"40px",
                            display:"flex",
                            marginTop:"auto"
                        }}
                    >
                        <img src={InfoItem} alt="" style={{width:"30px",height:"30px"}}/>
                    </Button>
                </Popover>
            </div>
        </div>
    );
}
export default ControlMusic;