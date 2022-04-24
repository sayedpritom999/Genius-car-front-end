import React from 'react';

const Footer = () => {
    const date = new Date();
    const currentDate = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
    return (
        <footer className="text-center mt-5">
            <p><small>copyright © {currentDate}</small></p>
        </footer>
    );
};

export default Footer;