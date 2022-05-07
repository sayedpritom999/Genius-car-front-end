import React from 'react';
import google from '../../../Images/social/Google__G__Logo.svg.png';
import fb from '../../../Images/social/fb.png';
import github from '../../../Images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { useLocation } from 'react-router-dom';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [token] = useToken(user || user1)

    let location = useLocation ();
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();

    let errorElement;

    if(loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className="text-danger">Error: {error?.message} {error1?.message}</p>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className="bg-primary w-50"></div>
                <p className=" mt-2 mx-4">or</p>
                <div style={{ height: '1px' }} className="bg-primary w-50"></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-light border shadow w-50 mt-3 mx-auto d-block">
                    <img style={{ width: '30px', height: '30px', background: "white", padding: '3px', borderRadius: '50%', marginRight: "15px" }} src={google} alt="" />
                    Sign in with google
                </button>
                <button className="btn btn-light border shadow w-50 mt-3 mx-auto d-block">
                    <img style={{ width: '30px', height: '30px', background: "white", padding: '3px', marginRight: "15px" }} src={fb} alt="" />
                    Sign in with facebook
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className="btn btn-light border shadow w-50 mt-3 mx-auto d-block">
                    <img style={{ width: '30px', height: '30px', background: "white", padding: '3px', marginRight: "15px" }} src={github} alt="" />
                    Sign in with github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;