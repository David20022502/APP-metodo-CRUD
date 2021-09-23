import React, {useRef, useState} from 'react';
import { Modal, Button,Input } from 'antd';
import '../css/prueba.css';
import {db} from "../Firebase";
const Login = () => {
    const [autores,setautores]=useState(avat.avatars);
    const playy= async ()=>{
        console.log("se hixo click");
        for (var i = 0; i < autores.length; i++) {
            console.log("esta denro for",autores[i]);
            db.ref(`avatars/${autores[i].id}`).set({
                id: autores[i].id,
                name: autores[i].name,
                enlace: autores[i].enlace
            });
        }
    }
    return (
        <>
            <Button  onClick={playy} style={{marginRight:"10px",fontSize:"25px"}}  type="primary" > play </Button>
        </>
    );
};
export default Login;
const avat = {
    avatars:[
    {
        "id": "1201",
        "name": "avatar1",
        "enlace": "https://data.whicdn.com/images/304061709/original.jpg"
    },
    {
        "id": "1202",
        "name": "avatar2",
        "enlace": "http://s3.narvii.com/image/7qhi25mxe5ylanwsonpzjdznph4y4n2v_00.jpg"
    },
    {
        "id": "1203",
        "name": "avatar3",
        "enlace": "https://i1.sndcdn.com/artworks-000124733104-cyve0c-t500x500.jpg"
    },
    {
        "id": "1204",
        "name": "avatar4",
        "enlace": "https://i1.sndcdn.com/avatars-etoHx0iCUyrbB0Xu-bH7kbQ-t500x500.jpg"
    },
    {
        "id": "1205",
        "name": "avatar5",
        "enlace": "https://cutewallpaper.org/22/happy-anime-boy-wallpapers/2722614390.jpg"
    },
    {
        "id": "1206",
        "name": "avatar6",
        "enlace": "https://i.pinimg.com/originals/45/7d/ec/457dec1682adbc6657e626ef904647c8.jpg"
    }
]
}