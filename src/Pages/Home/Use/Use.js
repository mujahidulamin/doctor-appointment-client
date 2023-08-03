import React from "react";
import "./Use.css";
import doctor from "../../../assets/doctor-1.png";
import payment from "../../../assets/payment.png";
import prescription from "../../../assets/prescription.png";

const Use = () => {
  return (
    <div className="use-bg pt-16">
      <h1 className="text-center text-white text-5xl font-bold pb-5">
        Why Use DocTorian?
      </h1>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="grid max-w-2xl mx-auto">
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 opacity-0 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full text-white">
                  1
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                  <img src={doctor} alt="" />
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base text-white">
                  Book The Doctor
                </p>
                <p className="text-sm text-white">
                  Access any GP or specialist doctor you need at anytime from
                  anywhere
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-300 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full text-white">
                  2
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                  <img src={prescription} alt="" />
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base text-white">
                  Prescription
                </p>
                <p className="text-sm text-white">
                  Access to online prescriptions from doctor after taking
                  consultation successfully.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-300 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full text-white">
                  3
                </div>
              </div>
              <div className="w-px h-full opacity-0" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                  <img src={payment} alt="" />
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base text-white">
                  Payment
                </p>
                <p className="text-sm text-white">
                  Easy payment to book your doctor to protect you and loved ones
                  health and wellbeing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Use;
