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
import MiCuenta from "./MiCuenta.js";
import BusquedasHome from "./BusquedasHome.js";
import {db} from "../Firebase";
import AlbumPage from "./AlbumPage";
import Favoritos from "./Favoritos";
const { Header, Footer, Sider, Content } = Layout;

const AppHome =({exitUser,authUser,LikesDatabase})=>{
    let audio = useRef(new Audio());
    const [MusicasMain,setMusicasMain]=useState(null);
    const [currentMusic,setCurrentMusic]=useState(null);
    const [musicIndex,setMusicIndex]=useState(null);
    const [currentTimeMusicc,setCurrentTimeMusic]=useState(0);
    const [timeProgres,setTimeProgress]=useState(0);
    const [Favorites,setFavorites]=useState(null);
    const [updateFavorites,setupdateFavorites]=useState(null);
    const [PlayingMain,setPlayingMain]=useState(false);
    useEffect(()=>{
        audio.current.volume=0.5;
        audio.current.addEventListener("playing",function changeTime(){
            setCurrentTimeMusic(audio.current.duration.toFixed(2));
        });
        audio.current.addEventListener("timeupdate",function changeproges(){
            setTimeProgress( getCurrentTime(audio.current.currentTime));
            const p = document.getElementById("secondprogres1");
            p.style.width=((audio.current.currentTime/audio.current.duration)*100)+"%";
        });
        audio.current.addEventListener("ended",function chanchesong(){
            nextMusic();
        });
    },[])
    useEffect(
        ()=>{
            if(currentMusic!==null && musicIndex!==null){
                audio.current.src = currentMusic.enlace;
                audio.current.play();
            }
        },[currentMusic]
    )
    useEffect(
        ()=>{
           if(MusicasMain!==null)
            {
                setCurrentMusic(MusicasMain[musicIndex]);
            }
        },[musicIndex]
    )
    useEffect(()=>{
        getFavoritosData();
    },[updateFavorites])
    const setMusicsMain = (array)=> {
        setMusicasMain(array)
    }
    const getFavoritosData=async ()=>{
        const favoritosTemporal=[]
        await db.ref(`favoritos/${authUser.uid}`).on("value",(snapshot)=>{
            console.log("favoritos traidos de la base",snapshot);
            snapshot.forEach((childSnapshot)=>{
                    const childId = childSnapshot.key;
                    const data = childSnapshot.val();
                    const dataDb={
                        id:childId,
                        idcancion:data.idcancion,
                        iduser:data.iduser
                    }
                    favoritosTemporal.push(dataDb)
                }
            );
            setFavorites(favoritosTemporal);
        });
    }
    const getFavoriteSongs=async ()=>{
        const songsFavoritos=[]
        Favorites.forEach((elemt,ide)=>{
             db.ref(`musicas/${elemt.idcancion}`).on('value',(snapshot)=>{
                songsFavoritos.push(snapshot.val());
            });
        })
        setMusicasMain(songsFavoritos);
    }
    const playy=()=>{
        if(audio.current.paused){
            audio.current.play();
            setPlayingMain(true);
        }
        else {
            audio.current.pause();
            setPlayingMain(false);
        }
    }
    const PlayMusic=(ide)=>{
        setMusicIndex(ide);
        if(audio.current.paused===false){
            audio.current.pause();
        }
        setCurrentMusic(MusicasMain[ide]);
    }
    const nextMusic=()=>
    {
        let itemsen = musicIndex+1;
        if(itemsen>MusicasMain.length-1){
            setMusicIndex(0);
        }
        else {
            setMusicIndex(musicIndex + 1);
        }
        if(audio.current.paused===false){
            audio.current.pause();
        }
    }
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
    const PrevMusic=()=>{
        let itemsen = musicIndex-1;
        if(itemsen<0){
            setMusicIndex(MusicasMain.length-1);
        }
        else {
            setMusicIndex(musicIndex - 1);
        }
        if(audio.current.paused===false){
            audio.current.pause();
        }
    }
    const changevolumenMusic=(e)=>{
        audio.current.volume=e.target.value/100;
    }
    const handleUpdateFavoritos=()=>{
        setupdateFavorites(!updateFavorites);
    }
    return(
        <>
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <BarLeft />
                    <Layout>
                        <Header className="divHeadrerApp">
                            <HeaderApp
                                authUser={authUser}
                                exitUser={exitUser}
                            />
                        </Header>
                        <Content>
                            <Switch>
                                <Route path="/favorites">
                                    <div className="musicItems" >
                                       <Favoritos musicasdata={MusicasMain} Favorites={Favorites} PlayMusic={PlayMusic} authUser={authUser} handleUpdateFavoritos={handleUpdateFavoritos} getFavoriteSongs={getFavoriteSongs}/>
                                    </div>
                                </Route>
                                <Route path="/count">
                                    <MiCuenta authUser={authUser}
                                              LikesDatabase={LikesDatabase}/>
                                </Route>
                                <Route path="/search/:valueSearch">
                                    <BusquedasHome PlayMusic={PlayMusic} authUser={authUser} Favorites={Favorites} handleUpdateFavoritos={handleUpdateFavoritos} setMusicsMain={setMusicsMain}/>
                                       </Route>
                                <Route path={`/artist/:artist`}>
                                    {
                                        <AlbumPage  PlayMusic={PlayMusic} authUser={authUser} Favorites={Favorites} handleUpdateFavoritos={handleUpdateFavoritos} setMusicsMain={setMusicsMain}/>
                                    }
                                </Route>
                                <Route path={`/genre/:genre`}>
                                    {
                                        <AlbumPage  PlayMusic={PlayMusic} authUser={authUser} Favorites={Favorites} handleUpdateFavoritos={handleUpdateFavoritos} setMusicsMain={setMusicsMain}/>
                                    }
                                </Route>
                                <Route path="/">
                                    <HomeApp LikesDatabase={LikesDatabase} />
                                </Route>
                            </Switch>
                        </Content>
                        <Footer style={{margin:"0",padding:"0"}}>
                            <ControlMusic
                                PlayingMain={PlayingMain}
                                changevolumenMusic={changevolumenMusic}
                                          currentMusic={currentMusic}
                                          timeProgres={timeProgres}
                                          getCurrentTime={getCurrentTime}
                                          currentTimeMusicc={currentTimeMusicc}
                                          PrevMusic={PrevMusic}
                                          playy={playy}
                                          nextMusic={nextMusic}
                            />
                        </Footer>
                    </Layout>
                </Layout>
            </Router>

        </>
    );
}
export default AppHome;

/*

                                        isResultados===true ? (musicasdata===null ?  <WaitingPage/>:
                                        musicasdata === false ? <h1 className="defaultTitlesobjectsbuscar">"Lo sentimos, no hay información"</h1>:
                                        <BusquedasHome artistas={artistasBuscadas} musicasdata={musicasdata} PlayMusic={PlayMusic}/>):
                                         isAlbumpages=== true && currentObject!==null? <AlbumPage currentObject={currentObject} />:
                                        <HomeApp gustosdatabase={gustosdatabase} changealbumPages={changealbumPages}/>
* */
/*

  isResultados ? (musicasBuscadas ?  <BusquedasHome artistas={artistasBuscadas} musicasdata={musicasdata} PlayMusic={PlayMusic}/>:<HomeApp gustosdatabase={gustosdatabase}/>):<div className="containerBusequedasresultados">
                                            <h1 className="defaultTitlesobjectsbuscar">"Lo sentimos, no hay información"</h1>
                                        </div>
* */

/*
             musicasdata ===null ? <WaitingPage/>: musicasdata ===false ?   <h1 className="defaultTitlesobjectsbuscar">"Lo sentimos, no hay información"</h1> :<BusquedasHome artistas={artistasBuscadas} musicasdata={musicasdata} PlayMusic={PlayMusic}/>
* */


/*
 {
                                        isAlbumpages=== true ?  (currentObject!==null? <AlbumPage artistas={currentObject} musicasdata={musicasdata} PlayMusic={PlayMusic} authUser={authUser} favoritos={favoritos} handleUpdateFavoritos={handleUpdateFavoritos}/>:
                                            <HomeApp gustosdatabase={gustosdatabase} changealbumPages={changealbumPages}/>):
                                        isResultados===true ? (musicasdata===null ?  <WaitingPage/>:
                                        musicasdata === false ? <h1 className="defaultTitlesobjectsbuscar">"Lo sentimos, no hay información"</h1>: <BusquedasHome artistas={autoresdata} musicasdata={musicasdata} PlayMusic={PlayMusic} changealbumPages={changealbumPages} authUser={authUser} favoritos={favoritos} handleUpdateFavoritos={handleUpdateFavoritos}/>):
                                            <HomeApp gustosdatabase={gustosdatabase} changealbumPages={changealbumPages}/>
                                    }
* */

/*
  <Route path={`/artistas/:artista`}>
                                    {
                                        musicasdata === false ? <h1 className="defaultTitlesobjectsbuscar">"Lo sentimos, no hay información"</h1>: <BusquedasHome artistas={autoresdata} musicasdata={musicasdata} PlayMusic={PlayMusic} changealbumPages={changealbumPages} authUser={authUser} favoritos={favoritos} handleUpdateFavoritos={handleUpdateFavoritos}/>
                                    }
                                </Route>
* */