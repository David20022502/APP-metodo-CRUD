import {UserOutlined,LeftOutlined,RightOutlined} from "@ant-design/icons";
import React from "react";
import '../css/HeaderApp.css';
import {Input} from "antd";
import {auth} from "../Firebase";
import {useHistory} from "react-router-dom";
const HeaderApp=({handdlesearch,exituser,changetoNull})=>{
    const history = useHistory();
    const goOut= async()=>{
        await auth.signOut();
        history.push("/");
        exituser();
    }
    return(
        <>
                <div className="HeaderContainerMusic">
                    <div style={{display:"flex", margin:"auto 0"}}>
                        <LeftOutlined onClick={()=>changetoNull(false)} style={{fontSize:"20px",color:"white", margin:"5px",cursor:"pointer"}}/>
                        <RightOutlined onClick={()=>changetoNull(true)} style={{fontSize:"20px",color:"white",margin:"5px",cursor:"pointer"}}/>
                    </div>
                    <Input onPressEnter={handdlesearch} className="BarraBusqueda"  placeholder="Buscar canciones, álbum, artistas" />
                    <div className="containerUser">
                        <div onClick={goOut} className="IconUserHome">
                            <UserOutlined style={{fontSize:"25px",color:"white",position:"absolute"}} />
                        </div>
                    </div>
                </div>
        </>
    );
}
export default HeaderApp;