import React from 'react';
import useServices from '../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [reviews] = useServices();
    return (
        <div className='container'>
            <h1 className='fw-bold mt-5'>SERVICE</h1>

            <div style={{ paddingBottom: "200px" }} className="row justify-content-center " >
                {
                    reviews.map(service => <Service key={service.id}
                        service={service}></Service>)
                }
            </div>
        </div>


    );
};

export default Services;