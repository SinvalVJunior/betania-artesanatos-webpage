import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { SocialMediaIconsReact } from 'social-media-icons-react';


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
        <Navbar className="navbar" variant="light" fixed="top" >
            <Container>
                <Navbar.Brand onClick={handleScrollToTop} className="image-brand">
                    <img src={LogoImg} height="70px" alt="Betania Artesanatos" />
                </Navbar.Brand>
            </Container>
            <Container className="navbar-text">
                <h4>Entre em contato comigo!</h4>
                <SocialMediaIconsReact icon="instagram" borderColor="salmon" backgroundColor="salmon" iconColor="white" size="30px" iconSize="5" borderWidth="1" roundness="50%" url="https://www.instagram.com/betaniaartesanatos/" />
                <SocialMediaIconsReact icon="facebook" borderColor="salmon" backgroundColor="salmon" iconColor="white" size="30px" iconSize="5" borderWidth="1" roundness="50%" url="https://www.facebook.com/betaniaribeirocampos" />
                <SocialMediaIconsReact icon="phone" borderColor="salmon" backgroundColor="salmon" iconColor="white" size="30px" iconSize="5" borderWidth="1" roundness="50%" url="https://api.whatsapp.com/send?phone=5531993796563" />

            </Container>
            <Container className="social-media-icons">
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