import React from 'react';
import GoogleLogin from 'react-google-login';
import {Button} from "antd";
import {authGoogle,auth,db} from "../Firebase";

const Whoarewe=()=>{
    const HandleConec=async()=>{
        try {
            const GoogleProvider = await new authGoogle.auth.FacebookAuthProvider();
            const responseGoogle = await auth.signInWithPopup(GoogleProvider);
            console.log("datos de facebok",responseGoogle);
            /*const checknewUsr = await checkUser(responseGoogle.user.uid);
            console.log("user id",responseGoogle.user);
            console.log("user id",checknewUsr);
            if(checknewUsr===false){
                const fullName="no";
                    const email="df";
                    const birthday="sdf";
                console.log("nuevo usuario");
                await db.ref(`users/${responseGoogle.user.uid}`).set({
                    fullName,
                    email,
                    birthday
                });
            }
            else {
                console.log("usuario ya registrado");
            }*/
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
    return(
        <div>
          <Button type="primary" onClick={HandleConec}>
              Google
          </Button>
        </div>
       );
}
export  default Whoarewe;

/*  <div>
            <GoogleLogin
                clientId="649214627337-5lhljt5j2uo54fj8m3e1v66v7gp0j9c3.apps.googleusercontent.com"
                render={renderProps => (
                    <Button type="primary" onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</Button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
* */