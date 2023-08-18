import React, { useEffect, useState } from "react";
import Specialities from "../Specialities/Specialities";
import "./Consultation.css";
import { useQuery } from "@tanstack/react-query";
const Consultation = () => {
  // const [specialities, setSpecialities] = useState([]);
  // console.log(specialities);

  // useEffect(() => {
  //   fetch("https://doctor-appointment-server-university.vercel.app/consultation")
  //     .then((response) => response.json())
  //     .then((data) => setSpecialities(data));
  // }, []);

  // const { data: specialities = [] } = useQuery({
  //   queryKey: ['specialities'],
  //   queryFn: async () => fetch("https://doctor-appointment-server-university.vercel.app/consultation")
  //     .then((response) => response.json())
  // })
  const { data: specialities = [] } = useQuery({
    queryKey: ["specialities"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctor-appointment-server-university.vercel.app/consultation"
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(specialities);
  return (
    <div className="consult-bg">
      <div className="mt-10 mx-10 lg:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-20 ">
        {specialities?.map((speciality) => (
          <Specialities
            key={speciality?._id}
            speciality={speciality}
          ></Specialities>
        ))}
      </div>
    </div>
  );
};

export default Consultation;
