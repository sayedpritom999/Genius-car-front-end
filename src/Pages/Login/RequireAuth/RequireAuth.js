import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
        return <div>
            <h3 className="text-danger">Email not verified</h3>
            <p className="text-dark">Please verify your email address</p>
            <button
                className="btn btn-primary"
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send verification email again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children
};

export default RequireAuth;