import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import s from './Header.module.css'
export default function Header() {
    return (
        <>
            <Navbar bg="light" variant="light" className={s.nav}>
                <Container>
                <Nav className="me-auto">
                <Nav.Link href="#home" className={s.nav__link}>Home</Nav.Link>
                <Nav.Link href="#features" className={s.nav__link}>Tele Mercadeo</Nav.Link>
                <Nav.Link href="#pricing" className={s.nav__link}>Email Marketing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}
