import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {
    const [agreement, setagreement] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login')
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        // const email = event.target.email.value;
        // const name = event.target.name.value;
        // const password = event.target.password.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const terms  =event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')
    }

    if (user) {
        console.log('user', user)
    }

    return (
        <div className="register-form">
            <h2 className="text-center my-3 text-uppercase text-primary">RegisterPlease Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder="Your Name" />
                <input type="email" name="email" id="email" placeholder="Email Address" required />
                <input type="password" name="password" id="" placeholder="Password" required />
                <input onClick={() => setagreement(!agreement)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agreement ? "text-primary px-2" : "text-danger mx-2"} htmlFor="terms">Accept genius car terms and conditions</label> */}
                <label className={`mx-2 ${agreement ? "text-primary" : "text-danger"}`} htmlFor="terms">Accept genius car terms and conditions</label>
                <input
                    disabled={!agreement}
                    type="submit"
                    value="Register"
                    className="w-50 mx-auto d-block mb-4 btn btn-primary" />
            </form>
            <p>Already have an account? <Link to="/login" onClick={handleLogin} className="text-primary text-decoration-none">Login from here</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;