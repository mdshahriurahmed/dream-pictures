import React from 'react';
import HomeServices from '../HomeServices/HomeServices';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider ></Slider>

            <h1 className='mt-5 pt-5 fw-bold'>SERVICES</h1>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;