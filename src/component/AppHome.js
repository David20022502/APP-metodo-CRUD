import { Layout } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import BarLeft from "./BarLeft";
import ControlMusic from "./ControlMusic";
import React, {useEffect, useRef, useState} from "react";
import '../css/AppHome.css';
import HeaderApp from "./HeaderApp";
import HomeApp from "./HomeApp";
import AlbumPage from "./AlbumPage";
import { separar} from "../conection/Conections";
import Library from "./Library";
import ConfigAlbum from "./ConfigAlbum";
import CreateAlbum from "./CreateAlbum";
const { Header, Footer, Sider, Content } = Layout;

const AppHome =()=>{
    //se usa la libreria audio y poder reproducir las caciones
    let audio = useRef(new Audio());
    const [currentMusic,setCurrentMusic]=useState(null);
    const [currentTimeMusicc,setCurrentTimeMusic]=useState(0);
    const [timeProgres,setTimeProgress]=useState(0);
    const [PlayingMain,setPlayingMain]=useState(false);
    /*se agrega eventos que estan escuchando todo lo que pasa con el audio*/
    useEffect(()=>{
        audio.current.volume=0.5;
        //evento para poder obtener la duracion de la canción
        audio.current.addEventListener("playing",function changeTime(){
            setCurrentTimeMusic(audio.current.duration.toFixed(2));
        });
        //evento para actualizar el tiempo de la cacnión  y actualizar la barra de progreso
        audio.current.addEventListener("timeupdate",function changeproges(){
            setTimeProgress( getCurrentTime(audio.current.currentTime));
            const p = document.getElementById("secondprogres1");
            p.style.width=((audio.current.currentTime/audio.current.duration)*100)+"%";
        });
    },[])
    useEffect(
        ()=>{
            if(currentMusic!==null){
                //para poder cambiar de musica a la musica actual que quiere reproducir
                audio.current.src = separar(currentMusic.urlMusic);
                audio.current.play();
            }
        },[currentMusic]
    )
    //metodo para reproducir las canciones
    const playy=()=>{
        console.log("incio pause_play");
        if(audio.current.paused){
            audio.current.play();
        }
        else {
            audio.current.pause();
        }
    }

    //para poder reproducir las cacniones al hacer click en ellas
    const PlayMusic=(item)=>{
        if(audio.current.paused===false){
            audio.current.pause();
        }
        setCurrentMusic(item);
    }
    //metodo para obteenr el tiempo de la cacnion en tipo texto
    const getCurrentTime=(time)=>
    {
        let duration=time;
        let hours=duration/3600;
        duration=duration%3600;
        let min =parseInt(duration/60);
        duration=duration%60;
        let sec=parseInt(duration);
        if(sec<10){
            sec=`0${sec}`
        }
        if(min<10){
            min=`0${min}`
        }
        return `${min} :${sec}`;
    }
    return(
        <>
            <Router>
                <div className="ContainerMainMusic">
                    <Switch>

                        <Route exact path="/myLibrary">
                            <Library/>
                        </Route>
                        <Route exact path="/myLibrary/myAlbums">
                          <ConfigAlbum/>
                        </Route>
                        <Route exact path="/myLibrary/myAlbums/createAlbum">
                            <CreateAlbum
                                PlayMusic={PlayMusic}
                            />
                        </Route>
                        <Route exact path="/myLibrary/myAlbums/updateAlbum/:value">
                            <CreateAlbum
                                PlayMusic={PlayMusic}
                            />
                        </Route>
                        <Route path="/favorites">
                        </Route>
                        <Route path="/artist/:artist">
                            <AlbumPage PlayMusic={PlayMusic}/>
                        </Route>
                        <Route path="/album/:album">
                            <AlbumPage PlayMusic={PlayMusic}/>
                        </Route>
                        <Route  path="/">
                            <HomeApp/>
                        </Route>
                    </Switch>

                </div>
                <Layout style={{ minHeight: '100vh'}}>
                   <BarLeft/>
                    <Header className="divHeadrerApp">
                        <HeaderApp
                        />
                    </Header>


                    <Footer style={{margin:"0",padding:"0",position:"fixed",bottom:"0",width:"100%",background:"none"}}>
                        <ControlMusic
                            playy={playy}
                            PlayingMain={PlayingMain}
                            currentMusic={currentMusic}
                            timeProgres={timeProgres}
                            getCurrentTime={getCurrentTime}
                            currentTimeMusicc={currentTimeMusicc}
                        />
                    </Footer>
                </Layout>
            </Router>

        </>
    );
}
export default AppHome;
