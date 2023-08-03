import React, { useContext } from "react";
import Header from "../Pages/Shared/Header/Header";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../contexts/AuthProvider";
import usePatient from "../hooks/usePatient";
import useDoctor from "../hooks/useDoctor";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isPatient] = usePatient(user?.email);
  const [isDoctor] = useDoctor(user?.email);

  return (
    <div>
      <Header></Header>
      <div className="bg-[#2c3c5f] -2xl mt-20">
        <div className="drawer drawer-mobile ">
          <input id="dashboard" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Outlet></Outlet>
            {/* <!-- Page content here --> */}
          </div>
          <div className="drawer-side ">
            <label htmlFor="dashboard" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 shadow-2xl bg-[#F8FAFC]  text-gray-800">
              {isPatient && (
                <>
                  <li>
                    {" "}
                    <Link to="/dashboard/patient">My Appointment</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/dashboard/myPrescription">My Prescription</Link>
                  </li>
                </>
              )}

              {isDoctor && (
                <>
                  <li>
                    {" "}
                    <Link to="/dashboard/mypatient">My Patient</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/dashboard/adddoctor">Profile</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/dashboard/prescription">Prescription</Link>
                  </li>
                </>
              )}

              {isAdmin && (
                <>
                  <li>
                    <Link to="/dashboard/allusers">All Users</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/allDoctors">All Doctors</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
