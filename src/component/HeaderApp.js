import {UserOutlined,LeftOutlined,RightOutlined} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import '../css/HeaderApp.css';
import {Avatar, Input} from "antd";
import {auth, db} from "../Firebase";
import {useHistory} from "react-router-dom";
const HeaderApp=({authUser,exitUser,changetoNull})=>{
    const history = useHistory();
    const[User,setUser]=useState(null);
    useEffect(()=>{
        db.ref(`users/${authUser.uid}`).on("value",(snapshot)=>{
            console.log("gustos traidos de la base",snapshot);
            setUser(snapshot.val());
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
    const goOut= async()=>{
        await auth.signOut();
        history.push("/");
        exitUser();
    }
    const handdlesearch=(e)=>{
        history.push(`/search/${e.target.value}`)
    }
    return(
        <>
                <div className="HeaderContainerMusic">
                    <Input onPressEnter={handdlesearch} className="BarraBusqueda"  placeholder="Buscar canciones, álbum, artistas" />
                    <div className="containerUser">
                        <img onClick={goOut} src={User&&User.imgUrlUser} alt="" style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%"}}/>
                    </div>
                </div>
        </>
    );
}
export default HeaderApp;
/*<Avatar onClick={goOut} style={{position:"absolute",cursor:"pointer"}} size="large" icon={<UserOutlined />} />
*/
// <UserOutlined style={{fontSize:"25px",color:"white",position:"absolute"}} />
/*
 <div onClick={goOut} className="IconUserHome">

                        </div>
* */