import React from 'react';



const Service = (props) => {
    const { img, name, price, details } = props.service;
    return (

        <div className='g-3 col-sm-12 col-md-6 col-lg-4 row justify-content-center'>
            <div class="card py-2 shadow-lg" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title fw-bold ">{name}</h5>
                    <p className="text-start ">{details}</p>
                    <a href="#" class="btn btn-dark">Go somewhere</a>
                </div>
            </div>
        </div>

    );
};

export default Service;