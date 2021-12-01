import React from 'react'
import {Container, Col , Row} from'react-bootstrap';
import s from './Card4.module.css'

export default function Card4() {
    return (
        <Container className={s.contenedor} >
        <Row >
            <Col><p className={s.p}>1 Week ago</p></Col>
            <Col><p>Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit</p></Col>
            <Col><p>Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit</p></Col>
            
        </Row>
    </Container>
    )
}
