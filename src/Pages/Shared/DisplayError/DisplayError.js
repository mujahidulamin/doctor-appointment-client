import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    return (
        <div>
            <p className='text-center text-3xl text-red-500'>Something Went Wrong</p>
            <p className='text-red-700 text-center'>{error.statusText || error.message}</p>
            <h3 className='text-center'>Go back to <Link to='/' className='text-primary font-bold'>Home</Link> page</h3>
        </div>
    );
};

export default DisplayError;