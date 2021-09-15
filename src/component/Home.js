import React from 'react';
import Logo from '../imgs/logo.jpeg';
import homeImg from '../imgs/homeImg.jpg';
import '../css/home.css';
const Home = () =>{

    return(
        <>
            <div className="fatherContainerHomecenter">
                <div className="containerImg">
                    <img src={homeImg} alt="home" className="HomeImg"/>
                    <div className="sizeDefaultover">
                        <h1 className="textinsideImg1">
                            ¡ESCUCHA LA MEJOR MÚSICA!
                        </h1 >
                        <h1 className="textinsideImg2"> EXPLORALO YA !</h1>
                    </div>
                </div>
                <div className="containerHomeright">
                    <img src={Logo} alt="logo" className="logoRight"/>
                    <div className="separator">
                    </div>
                    <div className="containertextRight">
                        <h1 className="textRighthome">
                            Nuevos Albumes
                        </h1>
                        <h1 className="textRighthomeunder">
                            Disfruta de tus canciones sin interrupciones
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
