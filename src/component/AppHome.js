import { Layout } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {
 useHistory
} from "react-router";

import BarLeft from "./BarLeft";
import ControlMusic from "./ControlMusic";
import React, {useEffect, useRef, useState} from "react";
import '../css/AppHome.css';
import MusicItem from "./MusicItem";
import HeaderApp from "./HeaderApp";
import HomeApp from "./HomeApp";
import MiCuenta from "./MiCuenta.js";
import BusquedasHome from "./BusquedasHome.js";
import {db} from "../Firebase";
import WaitingPage from "./WaitingPage";
import AlbumPage from "./AlbumPage";
const { Header, Footer, Sider, Content } = Layout;

const AppHome =({exituser,authUser,gustosdatabase,favoritos})=>{
    const history = useHistory();
    let audio = useRef(new Audio());
    //let currentObject;
    const progresBarmusic = useRef(null);
   // const [musicas,setMusicas]=useState(object.music);
    const [musicasdata,setMusicasdata]=useState(null);
   // const [albumesdata,setAlbumesdata]=useState(null);
    const[autoresdata,setautoresdata]=useState(null);
   // const [visibleTitle,setVisibleTitle]=useState(true);
    const [currentMusic,setCurrentMusic]=useState(null);
    const [musicIndex,setMusicIndex]=useState(null);
    const [currentTimeMusicc,setCurrentTimeMusic]=useState(0);
    const [timeProgres,setTimeProgress]=useState(0);
    //const [valueProgres,setvalueProgres]=useState(0);
    //const [musicasBuscadas,setmusicasBuscadas]=useState(null);
    const [artistasBuscadas,setartistasBuscadas]=useState(null);
    const [isResultados,setisResultados]=useState(false);
    const [isAlbumpages,setisAlbumpages]=useState(false);
    const [valueSearch,setValueSearch]=useState(null);
    const [noupdate,setnoupdate]=useState(false);
    const[currentObject,setcurrentObject]=useState(null);
    useEffect(async ()=>{
        //obtener las canciones cada vez que se cambie el vañor del buscador
        if(valueSearch!==null){
            getDatamusic();
        }
    },[valueSearch,noupdate])
    useEffect(()=>{
        if(musicasdata!==null){
            //setMusicasdata(musicasdata);
        }
    },[musicasdata])
    useEffect(()=>{
        if(valueSearch!==null){
            //busca el artista que se selecciono
            getArtistadata();
        }
    },[noupdate])
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
           if(musicasdata!==null)
            {
                setCurrentMusic(musicasdata[musicIndex]);
            }
        },[musicIndex]
    )
    const getDatamusic =async ()=>{
        const musicastemporales = [];
        await db.ref(`musicas/`).on("value",(snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                    const childId = childSnapshot.key;
                    const data = childSnapshot.val();
                    const NOMBRE =data.nombre;
                    const GENERO =data.genero;
                    const AUTOR = data.autor;
                    //console.log(NOMBRE,GENERO,AUTOR);
                    if(NOMBRE.toLowerCase().includes(valueSearch.toLowerCase())===true ||
                        GENERO.toLowerCase().includes(valueSearch.toLowerCase())===true ||
                        AUTOR.toLowerCase().includes(valueSearch.toLowerCase())===true ){
                        musicastemporales.push(data);
                    }
                }
            );
            setMusicasdata(musicastemporales);
        });
        //console.log("antes de entrara averficar las canciones",musicastemporales);
        //console.log("tamaño antes de entrara averficar las canciones",musicastemporales.length);
        if(musicastemporales.length===0){
            setMusicasdata(false);
            setisResultados(false);
           // console.log("entro a false de temporales",musicastemporales);
        }
        else {
            setisResultados(true);
           // console.log("entro a true de temporales",musicastemporales);
        }
    }
    const getArtistadata=async ()=>{
        const autorestemporales = [];
        await db.ref(`autores/`).on("value",(snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                    const childId = childSnapshot.key;
                    const data = childSnapshot.val();
                    const NOMBRE =data.nombre;
                    //console.log(NOMBRE,GENERO,AUTOR);
                    if(NOMBRE.toLowerCase()===valueSearch.toLowerCase()){
                        autorestemporales.push(data);
                    }
                }
            );
        });
        console.log("antes de entrara averficar los artistas",autorestemporales);
        console.log("tamaño antes de entrara averficar las artistas",autorestemporales.length);
        if(autorestemporales.length===0){
            setautoresdata(false);
            console.log("entro a false de temporales",autorestemporales);
        }
        else {
            setautoresdata(autorestemporales);
            console.log("entro a true de temporales",autorestemporales);
        }
    }
    const playy=()=>{
        if(audio.current.paused){
            audio.current.play();
        }
        else {
            audio.current.pause();
        }
    }
    /*const changeTimeMusic=(time)=>{
        audio.current.currentTime=(audio.current.duration/100)*time.target.value;
        setvalueProgres(time.target.value);
    }*/
    const PlayMusic=(ide)=>{
        setMusicIndex(ide);
        if(audio.current.paused===false){
            audio.current.pause();
        }
        setCurrentMusic(musicasdata[ide]);
    }
    const nextMusic=()=>
    {
        let itemsen = musicIndex+1;
        if(itemsen>musicasdata.length-1){
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
            setMusicIndex(musicasdata.length-1);
        }
        else {
            setMusicIndex(musicIndex - 1);
        }
        if(audio.current.paused===false){
            audio.current.pause();
        }
    }
    const handdlesearch=async(e)=>{
        console.log("lo que se busco",e.target.defaultValue);
        setValueSearch(e.target.defaultValue);
        //para que tambien se busque el artista
        setnoupdate(!noupdate);
        //para cambiar a la pagina de albums cuando busque una nueva cancion
        setisAlbumpages(false);
        //setvalueBusqueda(e.target.defaultValue);
        /**const newArtistas =object.autores.filter((item,index)=> item.nombre.toLowerCase()===e.target.defaultValue.toLowerCase());
        setartistasBuscadas(newArtistas);
        if(newArtistas.length===0){
            setartistasBuscadas(null);
        }*/
       /* const nuewMusicas= musicas.filter((item,index)=> item.nombre.toLowerCase().includes(e.target.defaultValue.toLowerCase())===true || item.genero.toLowerCase().includes(e.target.defaultValue.toLowerCase())===true || item.autor.toLowerCase().includes(e.target.defaultValue.toLowerCase())===true );
        setmusicasBuscadas(nuewMusicas);
        if(nuewMusicas.length===0){
            setmusicasBuscadas(null);
            setisResultados(false);
        }
        else {
            setisResultados(true);
        }*/


    }
    const changetoNull=(value)=>{
        //setmusicasBuscadas(null)
        if(value===true){
            setisResultados(true);
            setisAlbumpages(true);
        }
        else{
            setisResultados(false);
            setisAlbumpages(false);
        }
        console.log("el boleano",value);
    }
    const changevolumenMusic=(e)=>{
        console.log("cambio de volumen",e.target.value);
        audio.current.volume=e.target.value/100;
    }
    const changealbumPages=(nomArtista,objetoArtista,value)=>{
        console.log("imagene delartista seleecionado",objetoArtista);
        changetoNull(false);
        /*if(value==true)
        {
            setnoupdate(!noupdate);
        }*/
        //para que se busque con los datos del arista
        setisAlbumpages(true);
        setValueSearch(nomArtista);
        setcurrentObject(objetoArtista);
        console.log("imagene delartista seleecionado ya en el current",currentObject);
    }
    return(
        <>
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <BarLeft changetoNull={changetoNull}/>
                    <Layout>
                        <Header className="divHeadrerApp">

                            <HeaderApp
                                handdlesearch={handdlesearch}
                                exituser={exituser}
                                changetoNull={changetoNull}
                            />
                        </Header>
                        <Content>
                            <Switch>
                                <Route path="/favoritos">
                                    <div className="musicItems" >
                                        {
                                            musicasdata !== null && musicasdata!==false ? musicasdata.map(
                                                (Musica,index)=>{
                                                    return(
                                                        <MusicItem  key={index} Musica={Musica} PlayMusic={PlayMusic} index={index} authUser={authUser}/>
                                                    );
                                                }
                                            ): <div> no hay nada</div>
                                        }
                                    </div>
                                </Route>
                                <Route path="/cuenta">
                                    <MiCuenta authUser={authUser}
                                              gustosdatabase={gustosdatabase}/>
                                </Route>
                                <Route path="/">
                                    {
                                        isAlbumpages=== true ?  (currentObject!==null? <AlbumPage artistas={currentObject} musicasdata={musicasdata} PlayMusic={PlayMusic} authUser={authUser} favoritos={favoritos}/>:
                                            <HomeApp gustosdatabase={gustosdatabase} changealbumPages={changealbumPages}/>):
                                        isResultados===true ? (musicasdata===null ?  <WaitingPage/>:
                                        musicasdata === false ? <h1 className="defaultTitlesobjectsbuscar">"Lo sentimos, no hay información"</h1>: <BusquedasHome artistas={autoresdata} musicasdata={musicasdata} PlayMusic={PlayMusic} changealbumPages={changealbumPages} authUser={authUser} favoritos={favoritos} />):
                                            <HomeApp gustosdatabase={gustosdatabase} changealbumPages={changealbumPages}/>
                                    }
                                </Route>
                            </Switch>
                        </Content>
                        <Footer style={{margin:"0",padding:"0"}}>
                            <ControlMusic changevolumenMusic={changevolumenMusic}
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
