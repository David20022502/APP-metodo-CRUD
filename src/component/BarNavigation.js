import React, {useState} from 'react';
import Logo from '../imgs/logo.jpeg';
import {Menu, Modal, Button, Input} from 'antd';
import { Form, Checkbox } from 'antd';
import {auth, authGoogle, db} from "../Firebase";
import {
    FacebookOutlined,
    GoogleOutlined,
    MailOutlined,
    UserAddOutlined,
    UserOutlined
} from '@ant-design/icons';
import '../css/barNavigation.css';
import {Link,useHistory} from "react-router-dom";
import translateMessage from "./Messages.js";
const BarNavigation=({chagetoRegister})=>{
    const history = useHistory();
    const[viewModal,setModalview] =useState(false);
    const[MessageError,setMessageError]=useState(null);
const handleCancel=()=>{
    setModalview(false);
}
const changePath=()=>{
    history.push("/");
}
    const handleClick = (e) => {
        console.log('click ', e);

        if(e.key==="login"){
            setModalview(true);
            console.log("click en inicio");
        }
        if(e.key==="registrar"){

        }
    };
    const handleConectGoogle=async()=> {
        try {
            const GoogleProvider = await new authGoogle.auth.GoogleAuthProvider();
            const responseGoogle = await auth.signInWithPopup(GoogleProvider);
            const checknewUsr = await checkUser(responseGoogle.user.uid);
            console.log("user id",responseGoogle.user.uid);
            console.log("user id",checknewUsr);
            if(checknewUsr===false){
                const fullName=responseGoogle.user.displayName;
                const email=responseGoogle.user.email;
                const birthday="";
                const imgUrlUser=responseGoogle.user.photoURL;
                console.log("nuevo usuario");
                await db.ref(`users/${responseGoogle.user.uid}`).set({
                    fullName,
                    email,
                    birthday,
                    imgUrlUser
                });
                history.push("/");
            }
            else {
                console.log("usuario ya registrado");
            }
        }
        catch (error){
            console.log("ocurrio un error");
        }
    }
    const checkUser =async (userId)=> {
        let value = false;
        await db.ref(`users/`).on("value", (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                    const childId = childSnapshot.key;
                    if (userId===childId){
                        value= true;
                    }
                }
            );
        });
        return await value;
    }
    const onFinish = async (values) => {
        console.log('Success:', values);
        try {
            const user = values.username;
            const password = values.password;
            const userLogin = await auth.signInWithEmailAndPassword(
                user,
                password
            )
            console.log("user entrado",userLogin);
            history.push("/");
        }
        catch (error){
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessageError(translateMessage(errorCode));
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

    };

    return(
        <>
            <div className="Barnavigation">
                <div className="LogoProject">
                    <img src={Logo} alt="Logo" className="ImgLogo"/>
                    <h1 className="NameLogoApp" onClick={changePath}>Iden-X</h1>
                </div>
                <Menu onClick={handleClick}  mode="horizontal">
                    <Menu.Item key="ayuda" icon={<MailOutlined style={{fontSize:"20px"}}/> }>
                        <h1 className="defaultstylebarnavigationtop">Ayuda </h1>
                    </Menu.Item>
                    <Menu.Item key="registrar"  icon={<UserAddOutlined style={{fontSize:"20px"}} />}>
                        <h1 className="defaultstylebarnavigationtop">Registrarse</h1>

                        <Link to="/registrar">
                            {chagetoRegister}
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="login" icon={<UserOutlined style={{fontSize:"20px", color:"orange"}} />}>
                        <h1 className="defaultstylebarnavigationtop">Iniciar Sesión</h1>

                    </Menu.Item>
                </Menu>
            </div>

            <Modal
                centered
                visible={viewModal}
                width={400}
                onCancel={handleCancel}
                title={[
                    <div style={{width:"100%",justifyContent:"center"}}>
                        <h1 style={{width:"290px",margin:"auto",fontSize:"40px"}}>Inicio de Sesión</h1>
                    </div>
                ]}
                footer = {[
                    <div className="footerLogin">
                        <h1 style={{fontSize:"15px",width:"auto",margin:"auto",textAlign:"center"}}>
                            ¿No tienes una Cuenta? <a> Regístrate</a>
                        </h1>
                    </div>
                ]}
            >
                <div className="containerMainLogin">
                    <div className="containerButtons" >

                        <Button onClick={handleConectGoogle} icon={<GoogleOutlined style={{fontSize:"25px"}} />} style={{marginRight:"10px",fontSize:"20px"}} className="ButonConnectload" type="primary">Google</Button>
                        <Button icon={<FacebookOutlined style={{fontSize:"25px"}} />} style={{marginLeft:"10px",fontSize:"20px"}} className="ButonConnectload" type="primary">Facebook</Button>
                    </div>
                    <h1 className="defaultStyleError">{MessageError&&MessageError}</h1>
                    <Form style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeHolder="Usuario" className="inputTextboxLoad" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeHolder="contraseña" className="inputTextboxLoad"/>
                        </Form.Item>

                        <Form.Item style={{width: "200px",marginRight: "50px"}} name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{marginRight: "100px"}}>
                            <div className="containerButtons" >
                                <Button  htmlType="submit" style={{margin:"10px 0",width:"300px",fontSize:"20px"}} className="ButonConnect" type="primary">Iniciar Sesion</Button>
                            </div>
                        </Form.Item>
                    </Form>

                </div>
            </Modal>
        </>
    );
}
export default BarNavigation;
/*
 <Input className="inputTextboxLoad"  placeholder="Usuario" prefix={<UserOutlined />} />
                    <Input className="inputTextboxLoad"  placeholder="Contraseña" prefix={<KeyOutlined />} />
                    <div className="containerButtons" >
                        <Button style={{margin:"10px 0",width:"300px",fontSize:"20px"}} className="ButonConnect" type="primary">Iniciar Sesion</Button>
                    </div>
* */

/*
class BarNavigation1 extends React.Component {
    state = {
        current: 'ayuda',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {

        const { current } = this.state;
        return (

                <div className="Barnavigation">
                    <div className="LogoProject">
                        <img src={Logo} alt="Logo" className="ImgLogo"/>
                        <h1>Iden-X</h1>
                    </div>
                    <Menu onClick={this.handleClick}  mode="horizontal">
                        <Menu.Item key="ayuda" icon={<MailOutlined style={{fontSize:"20px"}}/> }>
                            Ayuda
                        </Menu.Item>
                        <Menu.Item key="registrar"  icon={<UserAddOutlined style={{fontSize:"20px"}} />}>
                            Registrarse
                        </Menu.Item>
                        <Menu.Item key="login" icon={<UserOutlined style={{fontSize:"20px", color:"orange"}} />}>
                            Iniciar Sesión
                        </Menu.Item>
                    </Menu>
                </div>

        );
    }
}*/
/*<div key="contone">
    <Menu.Item classNmae="item_Logo" key="logo">
        <div className="LogoProject">
            <img src={Logo} alt="Logo" className="ImgLogo"/>
            <h1>Iden-X</h1>
        </div>
    </Menu.Item>
</div>*/