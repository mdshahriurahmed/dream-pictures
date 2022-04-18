import React from 'react';
import { EmojiSadIcon, } from '@heroicons/react/solid';


const NotFound = () => {
    return (
        <div>
            <div className=' d-flex justify-content-center align-items-center' style={{ marginTop: "200px" }}>
                <div style={{ width: "150px" }}>
                    <EmojiSadIcon></EmojiSadIcon>
                </div>
            </div>


            <h1 className='fw-bold '>Error 404</h1>
            <p >Woops. Looks like this page doesn't exist</p>
        </div>
    );
};

export default NotFound;