import React, {useState} from 'react';
import '../css/modalInfo.css';
import {Button, Modal, Popover} from "antd";
import { Popconfirm, message } from 'antd';
const ModalInfo=()=>{
    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );
    return(
        <div className="modalInfoccontainer">
            <div>
                <Popover content={content} title="Title" trigger="hover">
                    <Button>Hover me</Button>
                </Popover>
                <Popover content={content} title="Title" trigger="focus">
                    <Button>Focus me</Button>
                </Popover>
                <Popover style={{width:"100px"}} content={content} title="Title" trigger="click">
                    <Button>Click me</Button>
                </Popover>
            </div>
        </div>
    );
}
export default ModalInfo;




