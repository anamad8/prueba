import React from 'react';
import s from './Card.module.css';
import {Container, Col , Row} from'react-bootstrap';
import From from './From'
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';


export default function Card() {
    return (
        <Container >
            <Row className={s.contenedor}>
                <Col><h3>Beneficios para su negocio</h3></Col>
                <Col><p>Transformación digital e implementación</p></Col>  
                <Col><p>Diagnóstico de la producción y ventas</p></Col>
                <Col><p>Establecer objetivos de monetización</p></Col> 
                <Col><p>Estrategia de mercadeo digital y publicidad</p></Col>
                <Col><p>Plan de ventas, seguimiento y cierre</p></Col> 
            </Row>
            <Row >
            <From/>
            </Row>
            <Card2/>
            <Card3/>
            <Card4/>
            
        </Container>
    )
}
