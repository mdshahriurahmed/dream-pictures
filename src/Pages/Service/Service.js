import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Service = (props) => {
    const { id, img, name, price, details } = props.service;
    const navigate = useNavigate();
    const handleCheckOut = id => {
        navigate(`/checkout/${id}`);
    }
    return (

        <div className='g-3 col-sm-12 col-md-6 col-lg-4 row justify-content-center'>
            <div class="card py-2 shadow-lg" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title fw-bold ">{name}</h5>
                    <h5>{price}$</h5>
                    <p className="text-start ">{details}</p>
                    <button onClick={() => handleCheckOut(id)} className='btn btn-dark px-5 fw-bold'>Check Out</button>
                </div>
            </div>
        </div>

    );
};

export default Service;