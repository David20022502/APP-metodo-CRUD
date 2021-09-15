import React from 'react';
import '../css/footer.css';
import {FacebookOutlined,WhatsAppOutlined,InstagramOutlined} from '@ant-design/icons';
const Footer = () =>{
    return(
        <>
            <div className="containerFooter">
                <div className="sonFooter">
                    <h1 className="defaultWord">
                        Informacion
                    </h1>
                    <div className="separador">

                    </div>
                    <h1 className="defaultWord">
                        ¿Quíenes somos?
                    </h1>
                    <h1 className="defaultWord">
                        Sobre la plataforma
                    </h1>
                    <h1 className="defaultWord">
                        Ayuda
                    </h1>
                </div>
                <div className="sonFooter">
                    <h1 className="defaultWord">
                        Redes Sociales
                    </h1>
                    <div className="separador">
                    </div>
                    <div className="FatherIcons">
                        <div className="countanerIcon">
                            <FacebookOutlined style={{fontSize:"40px", color:"white"}} />
                        </div>
                        <div className="countanerIcon">
                            <WhatsAppOutlined style={{fontSize:"40px", color:"white"}}/>
                        </div>
                       <div className="countanerIcon">
                           <InstagramOutlined style={{fontSize:"40px", color:"white"}}/>
                       </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;