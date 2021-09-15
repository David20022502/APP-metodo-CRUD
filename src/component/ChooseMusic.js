import React, {useEffect, useState} from 'react';
import Logo from '../imgs/logo.jpeg';
import '../css/ChooseMusic.css';
import {ArrowRightOutlined, LoadingOutlined} from "@ant-design/icons";
import ArtistCard from "./ArtistCard";
import {Button} from "antd";
import {db} from "../Firebase";
import WaitingPage from "./WaitingPage";
const ChooseMusic=({authUser})=>{;
    let secondsToGo=5;
    const [generosdatabase,setGenerosdatabase]=useState(null);
    const [gustos,setgustosSeleccionados]=useState([]);
    const [idGenero,setidGenero]=useState(null);
    const [Selecion,setSeleccion]=useState(null);
    const [position,setPotition]=useState(null);
    const[noupdate,setnoupdate]=useState(false);
    useEffect(()=>{
        const getgeneros =async()=>{
            const gustostemporales = [];
             await db.ref(`genero/`).on("value",(snapshot)=>{
                snapshot.forEach((childSnapshot)=>{
                        const childId = childSnapshot.key;
                        const data = childSnapshot.val();
                        gustostemporales.push(data);

                    }
                );
                 setGenerosdatabase(gustostemporales);
            });
            console.log("datos iteraccion",gustostemporales);
        }
        getgeneros();
    },[])
    useEffect(()=>{
        const getgeneros =async()=>{
            const gustostemporales = [];
            await db.ref(`genero/`).on("value",(snapshot)=>{
                snapshot.forEach((childSnapshot)=>{
                        const childId = childSnapshot.key;
                        const data = childSnapshot.val();
                        gustostemporales.push(data);

                    }
                );
                setGenerosdatabase(gustostemporales);
            });
            console.log("datos iteraccion",gustostemporales);
        }
        getgeneros();
    },[noupdate])
    useEffect(
        ()=>{
            if(Selecion!==null){
                if (Selecion===true){
                    const gustosnew = generosdatabase.map(
                        (item,index)=>{
                            if(item.id===idGenero){
                                return item.genero;
                            }
                        }
                    );
                    const gustosnew1 = gustosnew[position];
                    setgustosSeleccionados(()=>[...gustos,gustosnew1]);

                }
                else {
                        const gustosnew = gustos.filter((item,index)=>item!==generosdatabase[position].genero);
                        console.log("position",position);
                        setgustosSeleccionados(gustosnew);
                }
            }
        },[Selecion,idGenero,position]
    )
    /*const timer = setInterval(() => {
        secondsToGo -= 1;
    }, 1000);
    setTimeout(() => {
        clearInterval(timer);
        setnoupdate(true);
    }, secondsToGo * 1000);*/
    const submitGustos= async()=>{
        const id=authUser.uid;
        await db.ref(`gustos/${id}`).set({
            id,
            gustos
        });

    }
    const onChange=(e)=>{
        setSeleccion(e.target.checked);
    }
    const addGenr =(index,position)=>{
        setidGenero(index);
        setPotition(position)
    }
    const anularSelection=()=>{

    }
    return(
        <>
            {generosdatabase===null ? <WaitingPage/>: <div className="containerchoosemusic">
                <img src={Logo} alt="" className="imgWaitingPage"/>
                <div className="containerGustos">
                    <h1 className="defaultTitlesobjectsgustos">Escoge los géneros que sueles escuchar!</h1>
                    <div className="separadorHomeapp">
                    </div>
                    {
                        generosdatabase.length>0 ? generosdatabase.map((genro,index)=>{
                            return(
                                <>
                                    {console.log("gustos de la data base",gustos)}
                                    <ArtistCard key={index} object={genro} verCheckBox={true} onChange={onChange} index={genro.id} addGenr={addGenr} position={index} changealbumPages={anularSelection}/>
                                </>
                               );

                        }):<div style={{ width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}> <LoadingOutlined style={{fontSize:"60px",color:"white"}} /> </div>
                    }
                </div>
                {
                    gustos.length>0 ?  <Button onClick={submitGustos}  style={{margin: "10px"}} type="light" shape="round" icon={<ArrowRightOutlined />} size="large">
                        Continuar
                    </Button>: <Button onClick={submitGustos} disabled style={{margin: "10px"}} type="light" shape="round" icon={<ArrowRightOutlined />} size="large">
                        Continuar
                    </Button>
                }

            </div>
            }
        </>
    );
}
export default ChooseMusic;
