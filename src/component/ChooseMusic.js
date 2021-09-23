import React, {useEffect, useState} from 'react';
import Logo from '../imgs/logo.jpeg';
import '../css/ChooseMusic.css';
import {ArrowRightOutlined, LoadingOutlined} from "@ant-design/icons";
import ArtistCard from "./ArtistCard";
import {Button} from "antd";
import {db} from "../Firebase";
import WaitingPage from "./WaitingPage";
const ChooseMusic=({authUser})=>{;
    const [GenresDatabases,setGenresDatabases]=useState(null);
    const [Likes,setLikesSelected]=useState([]);
    const [idGenero,setidGenero]=useState(null);
    const [Slection,setSlection]=useState(null);
    const [position,setPotition]=useState(null);
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
                 setGenresDatabases(gustostemporales);
            });
            console.log("datos iteraccion",gustostemporales);
        }
        getgeneros();
    },[])
    useEffect(
        ()=>{
            if(Slection!==null){
                if (Slection===true){
                    const gustosnew = GenresDatabases.map(
                        (item,index)=>{
                            if(item.id===idGenero){
                                return item.genero;
                            }
                        }
                    );
                    const gustosnew1 = gustosnew[position];
                    setLikesSelected(()=>[...Likes,gustosnew1]);

                }
                else {
                        const gustosnew = Likes.filter((item,index)=>item!==GenresDatabases[position].genero);
                        console.log("position",position);
                    setLikesSelected(gustosnew);
                }
            }
        },[Slection,idGenero,position]
    )
    const submitGustos= async()=>{
        const id=authUser.uid;
        await db.ref(`gustos/${id}`).set({
            id,
            Likes
        });

    }
    const onChange=(e)=>{
        setSlection(e.target.checked);
    }
    const addGenr =(index,position)=>{
        setidGenero(index);
        setPotition(position)
    }
    return(
        <>
            {GenresDatabases===null ? <WaitingPage/>: <div className="containerchoosemusic">
                <img src={Logo} alt="" className="imgWaitingPage"/>
                <div className="containerGustos">
                    <h1 className="defaultTitlesobjectsgustos">Escoge los géneros que sueles escuchar!</h1>
                    <div className="separadorHomeapp">
                    </div>
                    {
                        GenresDatabases.length>0 ? GenresDatabases.map((genro,index)=>{
                            return(
                                <>
                                    {console.log("gustos de la data base",Likes)}
                                    <ArtistCard key={index} object={genro} verCheckBox={true} onChange={onChange} index={genro.id} addGenr={addGenr} position={index} firstTime={true}/>
                                </>
                               );

                        }):<div style={{ width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}> <LoadingOutlined style={{fontSize:"60px",color:"white"}} /> </div>
                    }
                </div>
                {
                    Likes.length>0 ?  <Button onClick={submitGustos}  style={{margin: "10px"}} type="light" shape="round" icon={<ArrowRightOutlined />} size="large">
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
