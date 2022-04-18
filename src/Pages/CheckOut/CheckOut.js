import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {

    const { checkoutId } = useParams();
    return (
        <div>
            <h1 className='mt-5'>Hi, required service checked out. </h1>
            <h4>The service id is {checkoutId}</h4>
        </div>
    );
};

export default CheckOut;