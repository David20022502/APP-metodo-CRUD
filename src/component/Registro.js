import '../css/Registro.css';
import ImgRegistro from '../imgs/imgRegistro.jpg';
import {useHistory} from "react-router-dom";
import {Form, Input, Button, DatePicker} from 'antd';
import { Checkbox} from "antd";
import {FacebookOutlined, GoogleOutlined} from "@ant-design/icons";
import {auth, authGoogle, db} from "../Firebase";
import React, {useEffect, useState} from "react";
import translateMessage from "./Messages";
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
const Registro =()=>{
    const history = useHistory();
    const[MessageError,setMessageError]=useState(null);
    const [Avatars,setAvatars]=useState(null);
    useEffect(()=>{
        const getAvatars =async()=>{
            const avatars = [];
            await db.ref(`avatars/`).on("value",(snapshot)=>{
                snapshot.forEach((childSnapshot)=>{
                        const childId = childSnapshot.key;
                        const data = childSnapshot.val();
                    avatars.push(data);

                    }
                );
                setAvatars(avatars);
            });
            console.log("datos iteraccion",avatars);
        }
        getAvatars();
    },[])
    const  onChange =(date, dateString) =>{
        console.log(date, dateString);
    }
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
        const numAleatory = Math.round(Math.random()*((Avatars.length-1)));
        try {
           const userCreated= await auth.createUserWithEmailAndPassword(values.email,values.password);
           const user = userCreated.user;
           const fullName = values.fullName;
           const email = values.email;
           const imgUrlUser = Avatars[numAleatory].enlace;
           const textBirthday = values.birthday._d+" ";
           const arrayBirth = textBirthday.split(' ');
           const birthday = arrayBirth[1]+"/"+arrayBirth[2]+"/"+arrayBirth[3];
           console.log("el usuario",user);
            await db.ref(`users/${user.uid}`).set({
                fullName,
                email,
                birthday,
                imgUrlUser
            });
            console.log("añonacimiento",birthday);
            history.push("/");

        }
        catch (error){
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessageError(translateMessage(errorCode));
        }
    };
    return(
        <>
            <div className="containerMainRegistro">
                <div className="containerLeft">
                    <div className="containerGetData">
                        <h1 className="TitleRegister">
                            ¡Descubre el mundo de la música en un único lugar!
                        </h1>
                        <div className="containerMainLogin">
                            <div className="containerButtons" >
                                <Button onClick={handleConectGoogle} icon={<GoogleOutlined style={{fontSize:"30px"}} />} style={{margin:"10px",fontSize:"25px"}} className="ButonConnect" type="primary" > Google </Button>
                                <Button  icon={<FacebookOutlined style={{fontSize:"30px"}} />} style={{marginLeft:"10px",fontSize:"25px",marginTop:"10px"}} className="ButonConnect" type="primary" >Facebook </Button>
                            </div>
                            <h1 className="defaultStyleError">{MessageError&&MessageError}</h1>
                            <div style={{width:"100%"}}>

                                <Form style={{display:" flex",flexDirection:"column",alignItems: "center"}} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                    <Form.Item name="fullName" rules={[{ required: true }]}>
                                        <Input placeHolder="Nombre y Apellido" className="inputTextbox"/>
                                    </Form.Item>
                                    <Form.Item name="email"  rules={[{ type: 'email', required: true }]}>
                                        <Input placeHolder="example@mail.com" className="inputTextbox"/>
                                    </Form.Item>

                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password placeHolder="Contraseña" className="inputTextbox" />
                                    </Form.Item>

                                    <Form.Item
                                        name="confirm"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please confirm your password!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password placeHolder="Vuelva a escribir la contraseña" className="inputTextbox" />
                                    </Form.Item>
                                    <Form.Item name="birthday"  rules={[{required: true }]}>
                                        <DatePicker className="inputTextbox" placeHolder="Fecha de Nacimiento" onChange={onChange} />
                                    </Form.Item>
                                        <Button style={{margin:"10px 0",width:"300px",fontSize:"30px"}} className="ButonConnect" type="primary" htmlType="submit" >Iniciar Sesión</Button>
                                </Form>
                            </div>
                            <div style={{alignItems:"center",width:"100%",display:"flex",justifyContent:"center",flexDirection:"column"}}>-
                                <Checkbox className="CheckBox"> Acepto  Términos y condiciones de IDEN-X</Checkbox>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="containerRight">
                    <img src={ImgRegistro} alt="Registro" className="imgRegistro"/>
                </div>
            </div>
        </>
    );
}
export default Registro;

/*
 <>
            <div className="containerMainRegistro">
                <div className="containerLeft">
                    <div className="containerGetData">
                        <h1 className="TitleRegister">
                            ¡Descubre el mundo de la música en un único lugar!
                        </h1>
                        <div className="containerMainLogin">
                            <div className="containerButtons" >
                                <Button  icon={<GoogleOutlined style={{fontSize:"30px"}} />} style={{marginRight:"10px",fontSize:"25px"}} className="ButonConnect" type="primary" > Google </Button>
                                <Button  icon={<FacebookOutlined style={{fontSize:"30px"}} />} style={{marginLeft:"10px",fontSize:"25px"}} className="ButonConnect" type="primary" >Facebbok </Button>
                            </div>
                            <Input id="" className="inputTextbox"  placeholder="correo electronico" prefix={<ArrowRightOutlined />} />
                            <Input className="inputTextbox"  placeholder="large size" prefix={<UserOutlined />} />
                            <Input className="inputTextbox"  placeholder="large size" prefix={<KeyOutlined />} />
                            <Input className="inputTextbox"   placeholder="large size" prefix={<KeyOutlined />} />
                            <Input className="inputTextbox"   placeholder="large size" prefix={<CalendarOutlined />} />
                            <Checkbox className="CheckBox"> Acepto  Términos y condiciones de IDEN-X</Checkbox>,
                            <div className="containerButtons" >
                                <Button style={{margin:"10px 0",width:"300px",fontSize:"30px"}} className="ButonConnect" type="primary" >Iniciar Sesion</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="containerRight">
                    <img src={ImgRegistro} alt="Registro" className="imgRegistro"/>
                </div>
            </div>
        </>
**/