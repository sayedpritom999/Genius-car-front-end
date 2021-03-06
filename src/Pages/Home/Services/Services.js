import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://quiet-forest-13370.herokuapp.com/service')
            .then(result => result.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className="container">
            <h1 className='services-title my-5'>These are the services we provide:</h1>
            <div className="services-container ">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;