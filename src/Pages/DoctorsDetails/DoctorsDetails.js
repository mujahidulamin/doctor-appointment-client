import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DoctorInfo from "./DoctorInfo";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";
import BookingModal from "./BookingModal/BookingModal";
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';

const DoctorsDetails = () => {

  const doctor = useLoaderData();
  // console.log(doctor);
  // console.log(doctor);

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="bg-[#0E1629] ">
      <div className="lg:mt-20 lg:mb-0 mt-20 mb-8 px-4 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-20 ">
        <div className="rounded-xl p-5 bg-white">
          <div className="lg:flex md:flex md:justify-between  md:items-center lg:justify-between lg:items-center lg:flex-row">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 lg:pr-5">
                <img src={doctor.image} alt="" className="w-40 rounded-xl" />
              </div>
              <div className="flex flex-col">
                <div className="lg:mb-3">
                  <h2 className="font-sans text-xl font-bold tracking-tight text-gray-900  sm:leading-none">
                    {doctor?.name}
                  </h2>
                </div>
                <div className="">
                  <p className="text-base text-gray-700 lg:mb-2">
                    {doctor?.designation}
                  </p>
                  <p className="lg:mb-2">{doctor?.specialities}</p>
                  <p className="">
                    <span className="text-gray-500">Working at</span>{" "}
                    <span className="font-bold">{doctor?.hospital}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="divider mt-8"></div>

          <div className="">
            <p className="text-gray-500 text-lg">Total Experience</p>
            <p className="font-bold">{doctor?.TotalExperience} Years+</p>
          </div>

          <div className="divider"></div>

          <DoctorInfo doctor={doctor}></DoctorInfo>

          {/* <AvailableAppointment
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            doctor={doctor}
          ></AvailableAppointment> */}

          <AppointmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            doctor={doctor}
          ></AppointmentBanner>

        </div>

        <BookingModal
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          doctor={doctor}
        ></BookingModal>

      </div>
      {/* <BookingModal
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        doctor={doctor}
      ></BookingModal> */}
    </div>
  );
};

export default DoctorsDetails;
