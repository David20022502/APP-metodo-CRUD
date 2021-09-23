import {Layout} from "antd";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Content, Footer, Header} from "antd/es/layout/layout";
import BarNavigation from "./BarNavigation";
import Footerp from './Footer.js';
import Registro from "./Registro";
import Home from "./Home";
import QuienesSomos from "./QuienesSomos.js";
const InicioPage=()=>{

    return(
        <>
            <Router>
                <Layout>
                    <Header style={{padding:"0",height:"80px"}} >
                        <BarNavigation/>
                    </Header>
                    <Content>
                        <Switch>
                            <Route path="/registrar">
                                <Registro/>
                            </Route>
                            <Route path="/whoweare">
                                <QuienesSomos/>
                            </Route>
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </Content>
                    <Footer  style={{padding:"0"}}>
                        <Footerp/>
                    </Footer>
                </Layout>
            </Router>
        </>
    );
}
export default InicioPage;