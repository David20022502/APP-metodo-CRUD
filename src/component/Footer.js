import React from 'react';
import '../css/footer.css';
import {FacebookOutlined,WhatsAppOutlined,InstagramOutlined} from '@ant-design/icons';
import {Link, useHistory} from "react-router-dom";
const Footer = () =>{
    const history = useHistory();
    const HandleHwoweAre=()=>{
        history.push("/whoweare");
    }
    return(
        <>
            <div className="containerFooter">
                <div className="sonFooter">
                    <h1 className="defaultWord">
                        Información
                    </h1>
                    <div className="separador">

                    </div>
                    <h1 onClick={HandleHwoweAre} className="defaultWord">
                        ¿Quiénes somos?
                    </h1>
                    <h1 className="defaultWord">
                        <a className="defaultWord"  href="https://github.com/DDI-ESFOT/proyecto-semestre-iden-x" target="_blank">
                            Sobre la plataforma
                        </a>
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
                            <a href="https://www.facebook.com/Iden-X-101559002282366" target="_blank" >
                                <FacebookOutlined style={{fontSize:"40px", color:"white"}} />
                            </a>
                        </div>
                        <div className="countanerIcon">
                            <a href="https://api.whatsapp.com/send?phone=939338670&text=Me%20interesa%20su%20plataforma" target="_blank">
                                <WhatsAppOutlined style={{fontSize:"40px", color:"white"}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;