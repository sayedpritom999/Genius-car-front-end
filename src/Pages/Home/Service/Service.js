import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, img, description, price, _id} = service;
    const navigate = useNavigate();

    const navigateToServiceDetails = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className="service">
            <img className="w-100" src={img} alt="" />
            <h2>Service {name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetails(_id)}>Book: {name}</button>
        </div>
    );
};

export default Service;