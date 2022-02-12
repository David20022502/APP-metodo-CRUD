import React, {useEffect, useState} from 'react';
import LogoItem from "../imgs/logomusicItem.jpg";
import Prev from "../imgs/prev.png";
import Next from "../imgs/next.png";
import HearRd from '../imgs/heartRed.png';
import '../css/ControlMusic.css';
import ImgController from '../imgs/Imagenes';
import {fixName, separar} from "../conection/Conections";
const ControlMusic =({currentMusic,timeProgres,getCurrentTime,currentTimeMusicc,PrevMusic,playy,nextMusic})=>{
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
                        <h1 className="defaultStyleAnswers">{currentMusic &&currentMusic.title}</h1>
                    </div>
                    <div style={{width:"100%",display:"flex",flexDirection:"row"}}>
                        <h1 className="defaultStyleParams">Autor:</h1>
                        <h1 className="defaultStyleAnswers">{currentMusic &&currentMusic.author}</h1>
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
            <div style={{display:"flex"}}>
                <div className="imgItemMusic">
                    <img  src={currentMusic ? separar(currentMusic.urlPoster):separar("https://drive.google.com/file/d/1LcdAs7ZNJRXLQfzeTi9X5hba9LGLiVIK/view?usp=sharing")} alt="" style={{width:"75px",height:"75px"}}/>

                </div>
                <div className=" containerTitlemusic">
                    <div className="ellipseOnleLine defaultStyleTitle">{currentMusic && fixName(currentMusic.title,currentMusic.author)}</div>
                    <div className="ellipseOnleLine defaultStyleTitle" style={{fontSize: "12px",color:"#c5c4c4"}}>{currentMusic && currentMusic.author}</div>
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
                <div className="containerminiControls">
                    <div style={{width:"24px",height:"24px"}}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                            <g id="🖥-Landing" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Artboard" transform="translate(-74.000000, -63.000000)">
                                    <g id="Volume-minus" transform="translate(74.000000, 63.000000)">
                                        <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                                        <path d="M4,11 C4,9.89543 4.89543,9 6,9 L7.33333,9 C7.76607,9 8.18714,8.85964 8.53333,8.6 L10.4,7.2 C11.0592,6.70557 12,7.17595 12,8 L12,16 C12,16.824 11.0592,17.2944 10.4,16.8 L8.53333,15.4 C8.18714,15.1404 7.76607,15 7.33333,15 L6,15 C4.89543,15 4,14.1046 4,13 L4,11 Z" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                                        <path d="M15.5355,15.3997 C17.4881,13.4471 17.4881,10.2812 15.5355,8.32861" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                                        <path d="M12,13 C12.5523,13 13,12.5523 13,12 C13,11.4477 12.5523,11 12,11" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="progressBar1" style={{width:"100px",margin:"auto 5px"}}>
                        <div className="secondprogres" id="secondprogres1">
                        </div>
                    </div>
                    <div style={{margin:"auto 5px",height:"17px"}}>
                        <svg width="17px" height="17px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Repeat-Play">
                                    <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
                                    <path d="M5,18.0002 L17,18.0002 C18.6569,18.0002 20,16.657 20,15.0002 L20,14" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                                    <path d="M16,2 L19.2929,5.29289 C19.6834,5.68342 19.6834,6.31658 19.2929,6.70711 L16,10" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                                    <path d="M8,14 L4.70711,17.2929 C4.31658,17.6834 4.31658,18.3166 4.70711,18.7071 L8,22" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                                    <path d="M19,6 L7,6 C5.34315,6 4,7.34315 4,9 L4,10" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div style={{margin:"auto 5px",height:"17px"}}>
                        <svg width="17px" height="17px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Shuffle-Play">
                                    <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
                                    <path d="M3,6 L5,6 C8.31371,6 11,8.68629 11,12 L11,12 C11,15.3137 8.31371,18 5,18 L3,18" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                                    <path d="M20,6 L17,6 C13.6863,6 11,8.68629 11,12 L11,12 C11,15.3137 13.6863,18 17,18 L20,18" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                                    <path d="M18,3 L20.2929,5.29289 C20.6834,5.68342 20.6834,6.31658 20.2929,6.70711 L18,9" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                                    <path d="M18,15 L20.2929,17.2929 C20.6834,17.6834 20.6834,18.3166 20.2929,18.7071 L18,21" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>

            </div>


                <div className="controlButtons"
                >
                    <div className="ButtonControllores" style={{left:"0"}}>
                        <div >
                            <img src={Prev} alt="" className="buttonController"/>
                        </div>
                    </div>
                        {
                          
                                <div className="ButtonControllores" onClick={()=>playy()}  style={{left:"39px", cursor:"pointer"}}>
                                    <div >
                                        <img src={ImgController.Pause} alt="" className="buttonController"/>
                                    </div>
                                </div>
                        }

                    <div className="ButtonControllores" style={{right:"0"}}>
                        <div >
                            <img src={Next} alt="" className="buttonController"/>
                        </div>
                    </div>
                </div>
            <div className="containerHeartRd">
                <img src={HearRd} alt="" style={{width:"25px",height:"25px"}}/>
            </div>
        </div>
    );
}
export default ControlMusic;