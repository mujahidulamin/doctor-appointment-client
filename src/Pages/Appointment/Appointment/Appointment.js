import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import DoctorsAppointment from '../DoctorsAppointment/DoctorsAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className='mt-20 bg-[#0E1629]'>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <DoctorsAppointment
                selectedDate={selectedDate}
            ></DoctorsAppointment>
        </div>
    );
};

export default Appointment;