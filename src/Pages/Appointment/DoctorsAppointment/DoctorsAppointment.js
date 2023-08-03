import { format } from 'date-fns';
import React, { useRef, useState } from 'react';
import DoctorsAppointmentOption from './DoctorsAppointmentOption';
import ModalForBooking from '../ModalForBooking/ModalForBooking';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';


const DoctorsAppointment = ({ selectedDate }) => {

    const searchRef = useRef();

    const [search, setSearch] = useState('');

    const [doctorForTreatment, setDoctorForTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: doctorAppointment = [], refetch, isLoading } = useQuery({
        queryKey: ['doctors', date, search],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctors?search=${search}&date=${date}`)
            const data = await res.json();
            return data;
        }
    });
    console.log(doctorAppointment);

    if (isLoading) {
        return <Loading></Loading>
    }
    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }


    return (
        <section className='pb-10'>
            <div className=' mb-10 '>
                <div>
                    <p className='text-center font-semibold lg:text-2xl md:text-2xl mb-5 text-white'>Available Appointments on <span className='text-[#e12986]' >{format(selectedDate, 'PP')}</span></p>
                </div>
                <div className='flex gap-2 justify-center items-center'>

                    <input placeholder='Search By Name or Specialities' ref={searchRef} className='input input-sm input-bordered input-info w-full max-w-xs ' type="text" />
                    <button onClick={handleSearch} className='btn btn-sm btn-primary'>Search</button>
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-10 md:px-6 px-4'>
                {
                    doctorAppointment?.map(appointment => <DoctorsAppointmentOption
                        key={appointment._id}
                        appointment={appointment}
                        setDoctorForTreatment={setDoctorForTreatment}
                    ></DoctorsAppointmentOption>)
                }
            </div>
            {
                doctorForTreatment &&
                <ModalForBooking
                    selectedDate={selectedDate}
                    doctorForTreatment={doctorForTreatment}
                    setDoctorForTreatment={setDoctorForTreatment}
                    refetch={refetch}
                ></ModalForBooking>
            }
        </section>
    );
};

export default DoctorsAppointment;