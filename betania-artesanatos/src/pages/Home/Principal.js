import React from 'react';
import {Carousel} from 'react-bootstrap';


import "./styles.css";


import image1 from "../../assets/caixas/Caixa-Barbara.jpg";

export default function Principal() {

    return (
        <Carousel className="carousel-principal">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/3IEZsaXmzzs/1500x1200"
                    alt="Third slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/3IEZsaXmzzs/1500x1200"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}

