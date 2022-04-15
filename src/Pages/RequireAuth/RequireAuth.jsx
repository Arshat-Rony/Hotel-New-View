import React, { Children } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    let location = useLocation()
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Spinner animation="border" variant="warning" />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;