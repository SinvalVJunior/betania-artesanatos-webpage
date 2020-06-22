import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import { Link, animateScroll as scroll} from 'react-scroll'


import LogoImg from '../../assets/Betania-Artesanatos-Logo.png';


import "./styles.css";


export default function NavMenu() {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    
    return (
        <Navbar className="navbar" collapseOnSelect expand="lg" variant="light" fixed="top" >
            <Navbar.Brand className="image-brand">
                <img src={LogoImg} height="70px" alt="Betania Artesanatos" />
            </Navbar.Brand>
            <Nav.Item>
                <Container className="navbar-text">
                    <h4>Me siga nas redes!</h4>
                </Container>
            </Nav.Item>
            <Nav.Item>
                <SocialMediaIconsReact icon="instagram" borderColor="salmon" backgroundColor="salmon" iconColor="white" size="30px" iconSize="5" borderWidth="1" roundness="50%" url="https://www.instagram.com/betaniaartesanatos/" />
                <SocialMediaIconsReact icon="facebook" borderColor="salmon" backgroundColor="salmon" iconColor="white" size="30px" iconSize="5" borderWidth="1" roundness="50%" url="https://www.facebook.com/betaniaribeirocampos" />
                <SocialMediaIconsReact icon="phone" borderColor="salmon" backgroundColor="salmon" iconColor="white" size="30px" iconSize="5" borderWidth="1" roundness="50%" url="https://api.whatsapp.com/send?phone=5531993796563" />
            </Nav.Item>
            <di class="spacer"></di>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="navbar-collapse" id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={scrollToTop} >Home</Nav.Link>
                    <Nav.Link ><Link activeClass="active" className="caixas" to="caixas" spy={true} smooth={true} duration={500} offset={-70} >Caixas</Link></Nav.Link>
                    <Nav.Link ><Link activeClass="active" className="vasos" to="vasos" spy={true} smooth={true} duration={500} offset={-70}>Vasos</Link></Nav.Link>
                    <Nav.Link ><Link activeClass="active" className="reciclagem" to="reciclagem" spy={true} smooth={true} duration={500} offset={-70}>Reciclagem</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}