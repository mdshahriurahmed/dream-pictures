import React from 'react';
import Description from '../Description/Description';
import HomeServices from '../HomeServices/HomeServices';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='container'>
            <Slider ></Slider>
            <Description></Description>

            <h1 className='mt-5  fw-bold'>SERVICES</h1>
            <div >
                <HomeServices></HomeServices>
            </div>
        </div>
    );
};

export default Home;