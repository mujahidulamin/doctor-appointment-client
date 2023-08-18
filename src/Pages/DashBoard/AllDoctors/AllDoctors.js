import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import { GoVerified } from "react-icons/go";

const AllDoctors = () => {
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctor-appointment-server-university.vercel.app/allDoctorsAdmin"
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(doctors);

  const { logOut } = useContext(AuthContext);
  const notifyVerify = () => toast.success("Verified Successfully");

  //verify a seller
  const handleVerify = (id) => {
    fetch(
      `https://doctor-appointment-server-university.vercel.app/allDoctorsAdmin/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          notifyVerify();
        }
      });
  };

  return (
    <div>
      <h3 className="text-4xl font-semibold text-slate-300 mt-6 text-center">
        All Users
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full rounded-0">
          {/* head */}
          <thead>
            <tr>
              <th>Profile Pic</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor) => (
              <tr>
                <th>
                  <div className="avatar">
                    <div className="w-full h-20 rounded">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center">
                      <div className="font-bold">{doctor.name} </div>
                      {doctor.verifyStatus && (
                        <GoVerified className="text-blue-600  ml-1" />
                      )}
                    </div>
                  </div>
                </th>
                <th>
                  <span className="badge badge-ghost badge-sm">
                    {doctor.email}
                  </span>
                </th>
                <th>
                  <button
                    onClick={() => handleVerify(doctor._id)}
                    disabled={doctor.verifyStatus}
                    className="btn btn-primary btn-md"
                  >
                    {doctor.verifyStatus ? "verified" : "verify"}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDoctors;
