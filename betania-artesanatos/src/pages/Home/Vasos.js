import React, { useEffect, useState } from 'react';
import { Container, Carousel, Row, Media } from 'react-bootstrap';


import Caixa_next_icon from './Caixa_next_icon';
import Caixa_prev_icon from './Caixa_prev_icon';

import "./styles.css";


export default function Vasos() {
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState([]);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const prev_icon = Caixa_prev_icon.apply();
    const next_icon = Caixa_next_icon.apply();



    const importAll = (r) => {
        let images = [];
        r.keys().map((item, index) => { images[index] = r(item); return undefined });
        return images;
    }

    const width = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;

    useEffect(() => {

        let images_per_section = 0;
        const all_images = importAll(require.context('../../assets/caixas', false, /\.(png|jpe?g|svg)$/));

        if (width < 576)
            images_per_section = 3;
        else if (width >= 576 & width < 768)
            images_per_section = 3;
        else if (width >= 768 & width < 992)
            images_per_section = 3;
        else if (width >= 992 & width < 1200)
            images_per_section = 3;
        else {
            images_per_section = 4;
        }
        let images_to_show = [];
        let pages = [];
        let number_of_pages = Math.ceil(all_images.length / images_per_section);
        let images_of_section = [];

        for (let i = 0; i < number_of_pages; i++) {
            pages.push(i);
        }

        for (let i = 0, k = 0; i < number_of_pages & k < all_images.length; i++) {
            images_of_section = [];
            for (let j = 0; j < images_per_section & k < all_images.length; j++, k++) {
                images_of_section.push(all_images[k]);
            }
            images_to_show.push(images_of_section);

        }
        setImages(images_to_show);
    }, [width]);

    return (
        <Container>
            <Row>
                <Container fluid className="Caixas-Label">
                    <h1>Vasos</h1>
                </Container>
            </Row>
            <Row>
                    <Carousel className="caixas-container" indicators={false} nextIcon={next_icon} prevIcon={prev_icon} activeIndex={index} onSelect={handleSelect}>
                        {
                            images.map((images_section, endereco) => (
                                <Carousel.Item className="col-sm-12 col-sm-offset-1 clearfix " key={endereco} >
                                    <Media className="images-container">
                                        {
                                                images_section.map(image => (
                                                <img className="image-slider"
                                                    src={image}
                                                    alt="Caixa2"
                                                    key={image}
                                                />
                                                ))
                                        }
                                    </Media>
                                </Carousel.Item>
                            ))

                        }
                    </Carousel>
            </Row>
        </Container >
    );
}

