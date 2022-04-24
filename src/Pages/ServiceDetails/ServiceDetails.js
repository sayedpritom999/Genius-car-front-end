import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const uri = `http://localhost:5000/service/${serviceId}`;
        fetch(uri)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    return (
        <div>
            <h2>You're about to book: {service.name}</h2>
            <div className="text-center">
                <Link to="/checkout"><button className="btn-primary">Proceed to checkout</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;