import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    // const [user, setUser] = useState({ 
    //     name: 'Khalid hasan',
    //     email: 'khalid@hasan.com',
    //     address: 'khalid road 3240',
    //     phone: '0123456789'
    // })

    // const handleAddressChange = event => {
    //     console.log(event.target.value);
    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress, ...rest};
    //     setUser(newUser);
    //     console.log(user)

    // }
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://quiet-forest-13370.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                console.log(data);
                if(data.insertedId) {
                    toast("Your order is booked!");
                    event.target.reset();
                }
            })
    }

    return (
        <div className="w-50 mx-auto">
            <h1>Please order: {service.name}</h1>
            <form onSubmit={handlePlaceOrder}>
                <input className="w-100 mb-2" type="text" value={user?.displayName} name="name" placeholder="name" required readOnly disabled />
                <br />
                <input className="w-100 mb-2" type="email" value={user?.email} name="email" placeholder="email" required readOnly disabled />
                <br />
                <input className="w-100 mb-2" type="text" value={service.name} name="service" placeholder="service" required readOnly disabled />
                <br />
                <input className="w-100 mb-2" type="text" name="address" placeholder="address" autoComplete='off' required />
                <br />
                <input className="w-100 mb-2" type="text" name="phone" placeholder="phone" required />
                <br />
                <input type="submit" value="Submit" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default Checkout;