import React from 'react';


import Nav from './NavMenu';
import Presentation from './Presentation';
import Caixas from './Caixas';
import Vasos from './Vasos';
import Reciclagem from './Reciclagem';
import Principal from './Principal';

import "./styles.css";


export default function Home() {


    return (
        <>
            <Nav />
            <Principal />
            <Caixas />
            <Vasos />
            <Reciclagem />
            <Presentation />

        </>
    );
}
