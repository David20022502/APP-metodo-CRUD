import '../App.css';
import React, {useEffect, useState} from "react";
import {auth,db} from "../Firebase";
import InicioPage from "./InicioPage";
import AppHome from "./AppHome";
import WaitingPage from "./WaitingPage";
import {useHistory} from "react-router-dom";
import ChooseMusic from "./ChooseMusic";
function App() {
    const history = useHistory();
    const [authUser,setauthUser]=useState(null);
    const[gustosdatabase,setgustosdatabse]=useState(null);
    const[favoritos,setfavoritos]=useState(null)
    useEffect(
        ()=>{
            auth.onAuthStateChanged(
                (user)=>{
                    if(user){
                        const gustostemporales = [];
                        const favoritosTemporal=[]
                        setauthUser(user);
                        db.ref(`gustos/${user.uid}/gustos`).on("value",(snapshot)=>{
                           console.log("gustos traidos de la base",snapshot);
                           snapshot.forEach((childSnapshot)=>{
                               const childId = childSnapshot.key;
                               const data = childSnapshot.val();
                               gustostemporales.push(data)
                               }
                           );
                            setgustosdatabse(gustostemporales);
                        });
                        //try {
                            db.ref(`favoritos/${user.uid}`).on("value",(snapshot)=>{
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
                                setfavoritos(favoritosTemporal);
                            });

                      //  }catch (error){
                        //    console.log(error);
                       // }

                    }
                    else {
                        console.log("no hay registro");
                        setgustosdatabse(false);
                        setauthUser(false);
                        history.push("/");
                    }
                }
            );
        },[]
    )
    useEffect(()=>{
        console.log("gustaos que se cambiaron",gustosdatabase);
        if(gustosdatabase!==null) {
            if (gustosdatabase.length === 0) {
                setgustosdatabse(false);
            }
        }
    },[gustosdatabase])
    useEffect(()=>{
        console.log("los favoritso de la base de datos",favoritos);
    },[favoritos])
    const exituser=()=>{
        setgustosdatabse(null);
    }

    return (
        <>
            {
                authUser === null ? <WaitingPage/> : authUser ===false ? <InicioPage/>:gustosdatabase===null?  <WaitingPage/> : gustosdatabase ===false? <ChooseMusic authUser={authUser}/>: <AppHome exituser={exituser} authUser={authUser} gustosdatabase={gustosdatabase}  favoritos={favoritos} />
            }
        </>

  );
}

export default App;
/*  {
                authUser === null ? <WaitingPage/> : authUser ===false ? <InicioPage/>:gustosdatabase===null?  <WaitingPage/> : gustosdatabase ===false? <ChooseMusic authUser={authUser}/>: <AppHome exituser={exituser}/>
            }
* */
/*
 <Router>
          <div className="headerload">
              <div className="Barnavigation">
                  <div className="LogoProject">
                      <img src={Logo} alt="Logo" className="ImgLogo">
                      </img>
                      <h1>Iden-X
                          <Link to="/home">
                          </Link>
                      </h1>
                  </div>
                  <Menu onClick={handleClick}  mode="horizontal">
                      <Menu.Item key="ayuda" icon={<MailOutlined style={{fontSize:"20px"}}/> }>
                          Ayuda
                          <Link to={url}>
                          </Link>
                      </Menu.Item>
                      <Menu.Item key="registrar"  icon={<UserAddOutlined style={{fontSize:"20px"}} />}>
                          Registrarse
                          <Link to={url}>
                          </Link>
                      </Menu.Item>
                      <Menu.Item key="login" icon={<UserOutlined style={{fontSize:"20px", color:"orange"}} />}>
                          Iniciar Sesión
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
                          <h1 style={{fontSize:"20px",width:"auto",margin:"auto",textAlign:"center"}}>
                              ¿No tienes una Cuenta? <a> Regístrate</a>
                          </h1>
                      </div>
                  ]}
              >
                  <div className="containerMainLogin">
                      <div className="containerButtons" >
                          <Button icon={<GoogleOutlined style={{fontSize:"25px"}} />} style={{marginRight:"10px",fontSize:"20px"}} className="ButonConnect" type="primary">Facebbok</Button>
                          <Button icon={<FacebookOutlined style={{fontSize:"25px"}} />} style={{marginLeft:"10px",fontSize:"20px"}} className="ButonConnect" type="primary">Google</Button>
                      </div>
                      <Input className="inputTextboxLoad"  placeholder="Usuario" prefix={<UserOutlined />} />
                      <Input className="inputTextboxLoad"  placeholder="Contraseña" prefix={<KeyOutlined />} />
                      <div className="containerButtons" >
                          <Button style={{margin:"10px 0",width:"300px",fontSize:"20px"}} className="ButonConnect" type="primary">Iniciar Sesion</Button>
                      </div>
                  </div>
              </Modal>
          </div>
          <div className="containerietmLoad">
              <Switch>
                  <Route path="/home">
                      <Home/>
                  </Route>
                  <Route path="/registro">
                      <Registro/>
                  </Route>
              </Switch>
          </div>
          <div className="footerLoad">
              <Footer/>
          </div>

      </Router>
* */