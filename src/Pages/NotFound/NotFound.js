import React from 'react';
import notFoundImage from '../../Images/404.jpg';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center my-5">
            <img src={notFoundImage} alt="" />
        </div>
    );
};

export default NotFound;