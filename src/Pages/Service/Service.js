import React from 'react';
import { StarIcon } from '@heroicons/react/solid'
import imge from '../../Images/slider1.jpg'
import { Button, Card } from 'react-bootstrap';
const Service = (props) => {
    const { img, name, price } = props.service;
    return (

        <div className='g-3 col-sm-12 col-md-6 col-lg-4 row justify-content-center'>
            <div class="card py-2 " style={{ width: "18rem" }}>
                <img src={imge} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

    );
};

export default Service;