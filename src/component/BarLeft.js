import React, {useState} from 'react';
import {
    Link
} from "react-router-dom";
import '../css/BarLeft.css';
import Logo from '../imgs/logo.jpeg';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    HomeOutlined,
    HeartOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const BarLeft=({changetoNull})=> {
    const [visibleTitle,setVisibleTitle]=useState(true);
    const state = {
        collapsed: false,
    };

   const onCollapse = collapsed => {
        console.log(collapsed);
       state.collapsed=collapsed;

   };
    const handleClick = (e) => {
        console.log('click ', e);
        //changetoNull();
    };
        const { collapsed } = state;
        return (
            <Sider className="containerLeftcontrol" collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <div className="ItemLogo">
                    <img src={Logo} alt="Logo" className="ImageLogo"/>
                    {visibleTitle && <h1 className="NameLogo">Iden-X</h1>}
                </div>
                <Menu onClick={handleClick} theme="dark" defaultSelectedKeys={['3']} mode="inline">
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        Mi cuenta
                        <Link to="/cuenta">
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<HomeOutlined />} >
                        Inicio
                        <Link to="/">
                        </Link>
                    </Menu.Item >
                    <Menu.Item key="4" icon={<HeartOutlined />}>
                        Favoritos
                        <Link to="/favoritos">
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );

}
export default BarLeft;







/*import React from 'react';
const BarLeft = ()=>{

}
export default BarLeft;*/