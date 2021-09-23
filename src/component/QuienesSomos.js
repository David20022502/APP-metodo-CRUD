import React from 'react';
import '../css/misEstilos.css';
import ivan  from '../imgs/ivan.jpeg';
import david from '../imgs/david.jpg';
import erick from '../imgs/erick.jpg';
import denisse from '../imgs/denisse.jpg';
import { Row, Col, Divider } from 'antd';
const QuienesSomos = () => {
    return (
<div className="folder">
    <div className="Titulo">
        <h1>¿Quiénes Somos?</h1></div>

    <div className="Mensaje">
        <h2>Si lo piensas se puede Programar</h2></div>

<div className="tarjetas">
    <Divider orientation="left"></Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
            <div className="folder1">
                <div className="imagenes">
                    <img  src={ivan}  width="249" height="200"/>

                 </div>

                <div className="Inf">
                    <li>Iván Fraga</li>
                    <h3>Conocimientos</h3>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                </div>

            </div>
        </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
            <div className="folder1">
                <div className="imagenes">
                    <img  src={david}  width="249" height="200"/>

                </div>
                <div className="Inf">
                    <li>David Cacuango</li>
                    <h3>Conocimientos</h3>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                </div>
            </div>
        </Col>
</Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
            <div className="folder1">
                <div className="imagenes">
                    <img  src={denisse}  width="249" height="200"/>
                </div>
                <div className="Inf">
                    <li>Denisse Cumbal </li>
                    <h3>Conocimientos</h3>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                </div>
            </div>
        </Col>
                </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
            <div className="folder1">
                <div className="imagenes">
                    <img  src={erick}  width="249" height="200"/>
                </div>
                <div className="Inf">
                    <li>Erick Andrade</li>
                    <h3>Conocimientos</h3>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                </div>
            </div>
        </Col>
    </Row>
</div>
                </div>

    );
}

export default QuienesSomos;