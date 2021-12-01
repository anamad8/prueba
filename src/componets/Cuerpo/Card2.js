import React from 'react'
import {Container, Col , Row} from'react-bootstrap';
import s from './Card2.module.css'

export default function Card2() {
    return (
        <Container className={s.contenedor} >
            <Row >
                <Col><h3>Transformación digital e implementación</h3></Col>
                <Col><p>Diagnóstico o creación del sitio web</p></Col>  
                <Col><p>Nuestro equipo de diseñadores, comunicadores y programadores , trabajan para
                        desarrollar su sitio web acorde con los lineamientos estipulados por Google.
                    </p></Col>
                <Col><p>Redes sociales</p></Col> 
                <Col><p>Ofrecémos el servicio de creación, administración y seguimiento de sus cuentas.</p></Col>
                <Col><p>Pauta digital</p></Col> 
                <Col><p>Contamos con un equipo digital que realizará la creación de campañas digital para pautar
                        en Google y de esta forma incrementar la venta de su mercancía en inventario.
                    </p></Col> 
                <Col><p>Email marketing</p></Col> 
                <Col><p>Envío de 20.000, correos personalizados a clientes potenciales</p></Col> 
                <Col><p>Asistencia de ventas</p></Col> 
                <Col><p>Soporte de telemercadeo para cierre de ventas, y fidelización de clientes</p></Col> 
            </Row>
        </Container>
    )
}
