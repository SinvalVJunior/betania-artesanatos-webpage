import React from 'react';

import { Container, Image } from 'react-bootstrap';
import { SocialMediaIconsReact } from 'social-media-icons-react';

import PerfilImg from '../../assets/Betania_perfil2.jpeg';

import "./styles.css";


export default function Presentaion() {
    return (
        <Container className="presentation">
            <Image height="100px" src={PerfilImg} roundedCircle />
            <h3>Betânia Campos</h3>
            <h5>Acompanhe meus trabalhos nas redes sociais!</h5>
            <SocialMediaIconsReact icon="facebook" size="50px" iconSize="5" borderWidth="5" roundness="50%" url="https://www.facebook.com/betaniaribeirocampos" />

            <SocialMediaIconsReact icon="instagram" size="50px" iconSize="5" borderWidth="5" roundness="50%" url="https://www.instagram.com/betaniaartesanatos/" />

        </Container>
    );
}

