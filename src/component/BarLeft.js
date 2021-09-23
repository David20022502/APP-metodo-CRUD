import React from 'react';
import {
    Link, useHistory
} from "react-router-dom";
import '../css/BarLeft.css';
import Logo from '../imgs/logo.jpeg';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    HomeOutlined,
    HeartOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

const BarLeft=()=> {
    const history = useHistory();
    const state = {
        collapsed: false,
    };

   const onCollapse = collapsed => {
        console.log(collapsed);
       state.collapsed=collapsed;

   };
    const handleClick = (e) => {
        console.log('click ', e);
    };
    const pushHome=()=>{
        history.push("/");
    }
        const { collapsed } = state;
        return (
            <Sider className="containerLeftcontrol" collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <div className="ItemLogo">
                    <img src={Logo} alt="Logo" className="ImageLogo"/>
                    <h1 onClick={pushHome} className="NameLogo">Iden-X</h1>
                </div>
                <Menu onClick={handleClick} theme="dark" defaultSelectedKeys={['3']} mode="inline">
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        Mi cuenta
                        <Link to="/count">
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<HomeOutlined />} >
                        Inicio
                        <Link to="/">
                        </Link>
                    </Menu.Item >
                    <Menu.Item key="4" icon={<HeartOutlined />}>
                        Favoritos
                        <Link to="/favorites">
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