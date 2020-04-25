import React, { useState } from 'react';
import { Container, Carousel, Row, Media } from 'react-bootstrap';

// Caixas
import CaixaImg1 from '../../assets/caixas/Caixa-Barbara.jpg';
import CaixaImg2 from '../../assets/caixas/Caixa-Barbara2.jpg';
import CaixaImg3 from '../../assets/caixas/Caixa-Luciana.jpg';
import CaixaImg4 from '../../assets/caixas/Caixa-Marrom.jpg';
import CaixaImg5 from '../../assets/caixas/Caixa-Tete.jpg';
import CaixaImg6 from '../../assets/caixas/Caixinhas-Azuis.jpg';


import Caixa_next_icon from './Caixa_next_icon';
import Caixa_prev_icon from './Caixa_prev_icon';

import "./styles.css";


export default function Caixas() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const prev_icon = Caixa_prev_icon.apply();
    const next_icon = Caixa_next_icon.apply();
    
    return (
        <Container>
            <Row>
                <Container fluid className="Caixas-Label">
                    <h1>Caixas</h1>
                </Container>
            </Row>
            <Row>
                <Container fluid className="caixas-container">
                    <Carousel  nextIcon={next_icon} prevIcon={prev_icon} activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item className="col-sm-12 col-sm-offset-1 clearfix " >
                            <Media className="images-container">
                                <img className="image-slider-first"
                                    src={CaixaImg1}
                                    alt="Caixa1"
                            
                                />
                                <img className="image-slider"
                                    src={CaixaImg2}
                                    alt="Caixa2"
                                />

                                <img className="image-slider"
                                    src={CaixaImg3}
                                    alt="Caixa3"
                                />
                                <img className="image-slider"
                                    src={CaixaImg5}
                                    alt="Caixa5"
                                />
                            </Media>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="image-slider-first"
                                    src={CaixaImg4}
                                    alt="Caixa4"
                                    width="31%"
                                />
                        <img className="image-slider"
                                    src={CaixaImg6}
                                    alt="Caixa6"
                                    width="30%"
                                />


                        </Carousel.Item>
                    </Carousel>
                </Container>
            </Row>
        </Container >
    );
}

