import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../Pages/Shared/Loading/Loading';
import useDoctor from '../../hooks/useDoctor';

const DoctorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isDoctor, isDoctorLoading] = useDoctor(user?.email)
    const location = useLocation()

    if (loading || isDoctorLoading) {
        return <Loading></Loading>
    }

    if (user && isDoctor) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default DoctorRoute;