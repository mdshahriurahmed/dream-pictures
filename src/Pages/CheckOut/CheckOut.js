import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {

    const { checkoutId } = useParams();
    return (
        <div>
            <h1>Hi i am checkout {checkoutId}</h1>
        </div>
    );
};

export default CheckOut;