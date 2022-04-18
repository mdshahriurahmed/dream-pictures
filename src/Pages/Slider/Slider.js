import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../Images/slider1.jpg'
import slider2 from '../../Images/slider2.jpg'
import slider3 from '../../Images/slider3.jpg'

const Slider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 " style={{ height: "700px" }}
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h3 >LEGIT WEDDING PHOTOS</h3>
                        <p>You've been to weddings - but probably not on the planning/getting married

                            side of things.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: "700px" }}
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 >LEGIT WEDDING PHOTOS</h3>
                        <p>You've been to weddings - but probably not on the planning/getting married

                            side of things.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: "700px" }}
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 >LEGIT WEDDING PHOTOS</h3>
                        <p>You've been to weddings - but probably not on the planning/getting married

                            side of things.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel >
        </div >
    );
};

export default Slider;