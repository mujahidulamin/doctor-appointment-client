import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { GoVerified } from "react-icons/go";

const DoctorsAppointmentOption = ({ appointment, setDoctorForTreatment }) => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const location = useLocation();

  const { name, slots, designation, specialities, hospital, price, email } =
    appointment; //appointment is treatment

  const [verified, setVerified] = useState(false);
  //get the verified seller
  useEffect(() => {
    axios
      .get(
        `https://doctor-appointment-server-university.vercel.app/verifiedSeller?email=${email}`
      )
      .then((res) => {
        console.log(res.data);
        setVerified(res.data);
      });
  }, [email]);

  return (
    <div className="card shadow-lg border mx-5 bg-white">
      <div className="card-body text-center ">
        <h2 className="card-title font-bold mx-auto">Dr. {name}</h2>
        <h4>
          <span className="font-semibold">Designation: </span>
          {designation}
        </h4>
        <h4>
          <span className="font-semibold">Specialities:</span> {specialities}
        </h4>
        <h4>
          <span className="font-semibold">Hospital:</span> {hospital}
        </h4>
        <h4>
          {" "}
          <span className="font-semibold">Price:</span> {price} Tk
        </h4>
        <h4>
          <span className="font-semibold">Time-Slot:</span>{" "}
          {slots.length > 0 ? (
            slots[0]
          ) : (
            <span className="text-red-600">Slot Not Available</span>
          )}
        </h4>
        <h4>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </h4>

        <h4>
          <span className="font-semibold"> Status:</span>
          {email && verified ? (
            <>
              <span> Verified</span>
              <span className="text-blue-700 ml-2 mt-2 inline-block">
                <GoVerified />
              </span>
            </>
          ) : (
            <>
              <span className="text-red-500"> Not Verified</span>
            </>
          )}
        </h4>

        <div className="card-actions justify-center mt-4">
          {/* The button to open modal */}

          {user ? (
            <>
              {email && verified ? (
                <>
                  <label
                    disabled={slots?.length === 0}
                    htmlFor="booking-modal"
                    className=" btn bg-[#07acf3] hover:bg-[#38BDF8] border-none text-md text-white  py-2 px-2 rounded 
               font-semibold "
                    onClick={() => setDoctorForTreatment(appointment)}
                  >
                    Book Appointment
                  </label>
                </>
              ) : (
                <>
                  <label
                    disabled
                    htmlFor="booking-modal"
                    className=" btn bg-[#07acf3] hover:bg-[#38BDF8] border-none text-md text-white  py-2 px-2 rounded 
               font-semibold "
                    onClick={() => setDoctorForTreatment(appointment)}
                  >
                    Book Appointment
                  </label>
                </>
              )}
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                state={{ from: location }}
                className="btn  bg-[#07acf3] hover:bg-[#38BDF8] border-none text-md text-white  px-2 rounded 
                    font-semibold "
              >
                Please Login First
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsAppointmentOption;
