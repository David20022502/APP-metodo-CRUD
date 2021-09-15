import React from'react';
import Repetir from "../imgs/repetir.png";
import Aleatorio from "../imgs/aleatorio.png";
import LogoItem from "../imgs/logomusicItem.jpg";
import {Button} from "antd";
import Prev from "../imgs/prev.png";
import Play from "../imgs/play.png";
import Next from "../imgs/next.png";
import InfoItem from "../imgs/infoItem.png";
import {SoundOutlined} from "@ant-design/icons";
import '../css/ControlMusic.css';
const ControlMusic =({changevolumenMusic,currentMusic,timeProgres,getCurrentTime,currentTimeMusicc,PrevMusic,playy,nextMusic})=>{
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
                        <img id="PlayIMG" src={Play} alt="" style={{width:"100px",height:"50px"}}/>
                    </Button>

                    <Button
                        style={{background:"transparent",border: "none",padding:"0",height:"40px"}}
                        onClick={nextMusic}
                    >
                        <img src={Next} alt="" style={{width:"60px",height:"40px"}}/>
                    </Button>
                </div>
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
            </div>
        </div>
    );
}
export default ControlMusic;