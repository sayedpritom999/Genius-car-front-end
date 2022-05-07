import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    return (
        <div>
            <h2>You're about to book: {service.name}</h2>
            <div className="text-center">
                <Link to={`/checkout/${serviceId}`}><button className="btn-primary">Proceed to checkout</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;