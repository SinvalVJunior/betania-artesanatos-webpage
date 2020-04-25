import React from 'react';


import Nav from './NavMenu';
import Presentation from './Presentation';
import Caixas from './Caixas';
import Vasos from './Vasos';

import "./styles.css";


export default function Home() {
    

    return (
        <>
            <Nav />
            <Presentation />
            <Caixas />      
            <Vasos />      
        </>
    );
}
