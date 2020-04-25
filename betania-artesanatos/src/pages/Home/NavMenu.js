import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


import LogoImg from '../../assets/Betania-Artesanatos-Logo.png';


import "./styles.css";


export default function NavMenu() {

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    function handleScrollToCaixas() {
        window.scrollTo({
            top: 450,
            behavior: 'smooth'
        })
    }
    return (
        <Navbar className="navbar justify-content-between" variant="light" fixed="top" >
            <Container>
                <Navbar.Brand onClick={handleScrollToTop} className="image-brand">
                    <img src={LogoImg} height="70px" alt="Betania Artesanatos" />
                </Navbar.Brand>
            </Container>
            <Nav className="mr-auto">
                <Nav.Link onClick={handleScrollToTop}>Home</Nav.Link>
                <Nav.Link onClick={handleScrollToCaixas}>Caixas</Nav.Link>
                <Nav.Link href="/">Vasos</Nav.Link>
                <Nav.Link href="/">Reciclagem</Nav.Link>
            </Nav>
        </Navbar>
    );
}