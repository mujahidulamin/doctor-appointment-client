import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";


const MyPatient = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/doctor-appointment?email=${user?.email}`;

  const { data: patients = [] } = useQuery({
    queryKey: ["patients", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(patients);

  const [doctorEmail, setDoctorEmail] = useState("");
  const [patientEmail, setPatientEmail] = useState("");

  const sendEmail = (button) => {
    axios
      .post("http://localhost:5000/send-email", {
        button,
        doctorEmail,
        patientEmail,
      })
      .then((response) => {
        console.log(response.data.message); 
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const areInputsEmpty =
    doctorEmail.trim() === "" || patientEmail?.trim() === "";

  return (
    <div className="">
      <h3 className="text-4xl font-semibold text-slate-300 mt-6 text-center">
        My Patient
      </h3>
      <div className="flex justify-evenly items-center my-5">
        <p className="text-slate-300 text-center font-semibold">
          {" "}
          My Name- {user?.displayName}
        </p>
        <p className="text-slate-300 text-center font-semibold">
          {" "}
          My Email- {user?.email}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full rounded-none mb-10">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Email</th>
              <th>Payment Status</th>
              <th>Send confirmation Mail to Patient</th>
            </tr>
          </thead>
          <tbody>
            {patients?.map((patient, i) => (
              <tr key={patient?._id} className="hover">
                <th>{i + 1}</th>

                {/* <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img alt='' src={patient?.doctorImage} />
                                        </div>
                                    </div>
                                </td> */}
                <td>{patient?.patientName}</td>
                <td>{patient?.appointmentDate}</td>
                <td>{patient?.slot}</td>
                <td>{patient?.patientEmail}</td>
                <td>
                  {patient?.price && !patient?.paid && (
                    <span className="text-red-500 font-semibold">Not Paid</span>
                  )}
                  {patient?.price && patient?.paid && (
                    <span className="text-green-500 font-semibold">PAID</span>
                  )}
                </td>
                <td>
                  <div className="flex gap-5">
                    <input
                      type="email"
                      placeholder="My Email"
                      value={doctorEmail}
                      onChange={(e) => setDoctorEmail(e.target.value)}
                      className="input "
                    />
                    <input
                      type="email"
                      placeholder="Patient Email"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      className="input"
                    />
                  </div>

                  {!areInputsEmpty && (
                    <div className="flex mt-5 justify-center gap-8">
                      <button
                        className="btn btn-success btn-xs"
                        onClick={() => sendEmail("visit")}
                      >
                        Visited
                      </button>
                      <button
                        className="btn btn-error btn-xs"
                        onClick={() => sendEmail("absent")}
                      >
                        Absent
                      </button>
                    </div>
                  )}
                  <Toaster />
                  {/* <select>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </select> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPatient;
