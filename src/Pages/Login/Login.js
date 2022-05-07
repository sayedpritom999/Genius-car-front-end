import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../PageTitle/PageTitle';
import useToken from '../../hooks/useToken';


const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);

    let errorElement;

    if (error) {
        errorElement = <p className="text-danger">Error: {error?.message}</p>
    }

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);

    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please enter your email address');
        }
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div className="container w-50 mx-auto my-5 border p-5 rounded">
            <PageTitle title="login"> - Login</PageTitle>
            <h2 className="text-primary">Please Login to Proceed</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-50 mx-auto d-block mb-4">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to genius car? <Link to="/register" className="text-primary text-decoration-none" onClick={navigateRegister}>Please register</Link>  </p>
            <p>Forgot Password? <button className="btn btn-link text-decoration-none" onClick={resetPassword}>Reset Password</button>  </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;