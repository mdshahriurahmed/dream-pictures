import React from 'react';
import useServices from '../hooks/useServices';

import Services from '../Service/Service';

const HomeServices = () => {
    const [services] = useServices();
    const threeServices = services.slice(0, 3);
    return (
        <div >
            <div className='row justify-content-center' style={{ paddingBottom: "200px" }}>
                {
                    threeServices.map(service => <Services key={service.id}
                        service={service}></Services>)
                }
            </div>
        </div>
    );
};

export default HomeServices;