import React from 'react';
import {
    LoadingOutlined
} from '@ant-design/icons';
import  '../css/WaitingPage.css';
const WaitingPage=()=>{
    return(
        <div className="containerWainting">
            <LoadingOutlined style={{fontSize:"40px",color:"white"}} />
        </div>
    );
}
export default WaitingPage;