import React from 'react'
import {Container, Col , Row} from'react-bootstrap';
import s from './Card3.module.css';

export default function Card3() {
    return (
        <Container className={s.contenedor} >
            <Row >
                <Col><h3>fijamos las pautas y directrices para optimizar el aprovechamiento de 
                    las cuentas en las redes</h3></Col>
                <Col><p>Establecemos las características de los artículos</p></Col>  
                <Col><h3>Realizamos tele marketing de salida y de entrada</h3></Col> 
                <Col><p>Monetizar las acciones en la web y las cuentas en las redes sociales </p></Col>
                <Col><h3>Evaluación de los resultados: diario, semanal y mensual</h3></Col> 
            </Row>
        </Container>
    )
}
