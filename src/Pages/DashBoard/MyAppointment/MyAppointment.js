import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `https://doctor-appointment-server-university.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
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

  return (
    <div className="">
      <h3 className="text-4xl font-semibold text-slate-300 mt-6 text-center">
        My Appointment
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
              <th>Image</th>
              <th>Doctor Name</th>
              <th>Speciality</th>
              <th>Date</th>
              <th>Time</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking?._id} className="hover">
                <th>{i + 1}</th>

                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img alt="" src={booking?.doctorImage} />
                    </div>
                  </div>
                </td>
                <td>{booking?.doctorName}</td>
                <td>{booking?.specialities}</td>
                <td>{booking?.appointmentDate}</td>
                <td>{booking?.slot}</td>
                <td>{booking?.price}</td>
                <td>
                  {booking?.price && !booking?.paid && (
                    <Link to={`/dashboard/payment/${booking?._id}`}>
                      <button className="btn btn-sm btn-accent text-white">
                        Pay
                      </button>
                    </Link>
                  )}
                  {booking?.price && booking?.paid && (
                    <span className="text-green-500">PAID</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
