import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Loading from '../../Shared/Loading/Loading';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise);

const Payment = () => {

    const booking = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-white text-center text-3xl font-semibold my-5'>PAYMENT <br /> Your Appointment with <br />Dr. {booking?.doctorName}</h2>
            <p className='text-white text-2xl text-center'>Please Pay <strong>${booking?.price}</strong> for your appointment on {booking?.appointmentDate} <br /> at {booking?.slot}</p>
            <div className='w-8/12 bg-slate-100 my-12 border mx-auto p-5 rounded'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;