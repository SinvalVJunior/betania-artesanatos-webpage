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
            <SocialMediaIconsReact icon="instagram" borderColor="white" backgroundColor="salmon" iconColor="white" size="50px" iconSize="5" borderWidth="1" roundness="50%" url="https://www.instagram.com/betaniaartesanatos/" />
            <SocialMediaIconsReact icon="facebook" borderColor="white" backgroundColor="salmon" iconColor="white" size="50px" iconSize="5" borderWidth="1" roundness="50%" url="https://www.facebook.com/betaniaribeirocampos" />
            <SocialMediaIconsReact icon="phone" borderColor="white" backgroundColor="salmon" iconColor="white" size="50px" iconSize="5" borderWidth="1" roundness="50%" url="https://api.whatsapp.com/send?phone=5531993796563" />

        </Container>
    );
}

