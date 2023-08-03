import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import './Specialist.css'
const Specialist = () => {
  const doctors = useLoaderData();
  console.log(doctors);

  return (
    <div className="pt-24 pb-4 specialist-bg">
      {doctors.map((doctor) => (
        <div
          key={doctor._id}
          className="py-5 mx-4 lg:mx-auto md:mx-auto sm:max-w-xl md:max-w-full lg:w-9/12 md:px-24 lg:px-8 lg:py-5"
        >
          <Link to={`/doctorsDetails/${doctor?._id}`}>
            <div className="p-5 rounded shadow-lg border w-full hover:shadow-xl bg-white">
              <div className="lg:flex md:flex justify-between  lg:flex-row md:flex-row">
                <div className="flex gap-3">
                  <img className="w-28 rounded" src={doctor?.image} alt="" />
                  <div className="flex flex-col">
                    <div className="lg:mb-0">
                      <h2 className="font-sans text-xl font-bold tracking-tight text-gray-900  sm:leading-none">
                        {doctor?.name}
                      </h2>
                    </div>
                    <div className="">
                      <p className="mb-2 text-base text-gray-700">
                        {doctor?.designation}
                      </p>
                      <p className="mb-4 text-base flex flex-col ">
                       <span className="text-gray-400">Specialities</span>  {doctor?.specialities}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-72 mt-10 lg:mt-0 md:mt-0">
                  <div className="">
                    <p className="text-gray-400"> Working in</p>
                    <p className=" font-semibold">{doctor?.hospital}</p>
                    <p>
                      Total Experience: <br />{" "}
                      <span className="font-semibold">{doctor?.TotalExperience}+ Years</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Specialist;
