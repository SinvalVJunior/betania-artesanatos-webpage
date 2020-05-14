import React from 'react';


import Nav from './NavMenu';
import Presentation from './Presentation';
import Caixas from './Caixas';
import Vasos from './Vasos';
import Reciclagem from './Reciclagem';


import "./styles.css";


export default function Home() {
    

    return (
        <>
            <Nav />
            <Caixas />      
            <Vasos /> 
            <Reciclagem />
            <Presentation />

        </>
    );
}
