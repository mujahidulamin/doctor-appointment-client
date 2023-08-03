import React from 'react';
import img from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import './AppointmentBanner.css'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    const disabledDays = [
        { from: new Date(2000, 1, 1), to: new Date(2023, 5, 4) },
        { from: new Date(2023, 7, 1), to: new Date(2050, 7, 25) },
    ];




    return (
        <header className='my-2'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse  gap-10">
                    <img src={img} alt='' className=" lg:w-8/12 md:w-9/12 w-md rounded-lg shadow-2xl" />
                    <div className='mr-6 bg-white rounded-lg'>
                        <DayPicker
                            mode="single"

                            selected={selectedDate}
                            onSelect={(selectedDate) => {
                                if (selectedDate) {
                                    setSelectedDate(selectedDate);
                                }
                            }}
                            disabled={disabledDays}

                        />
                        {/* <p className='ml-6'>You have selected: {format(selectedDate, 'PP')}.</p>; */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;