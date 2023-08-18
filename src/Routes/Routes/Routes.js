import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Consultation from "../../Pages/Consultation/Consultation";
import DoctorsDetails from "../../Pages/DoctorsDetails/DoctorsDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Specialist from "../../Pages/Specialist/Specialist";
import Specialities from "../../Pages/Specialities/Specialities";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointment from "../../Pages/DashBoard/MyAppointment/MyAppointment";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AddDoctor from "../../Pages/DashBoard/AddDoctor/AddDoctor";
import MyPatient from "../../Pages/DashBoard/MyPatient/MyPatient";
import DoctorRoute from "../DoctorRoute/DoctorRoute";
import Prescription from "../../Pages/DashBoard/Prescription/Prescription";
import MyPrescription from "../../Pages/DashBoard/MyAppointment/MyPrescription";
import AllDoctors from "../../Pages/DashBoard/AllDoctors/AllDoctors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/consultation",
        element: <Consultation></Consultation>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/specialist/:id",
        element: <Specialist></Specialist>,
        loader: ({ params }) =>
          fetch(
            `https://doctor-appointment-server-university.vercel.app/consult/${params.id}`
          ),
      },
      {
        path: "/specialities",
        element: <Specialities></Specialities>,
      },

      {
        path: "/doctorsDetails/:id",
        element: <DoctorsDetails></DoctorsDetails>,
        loader: ({ params }) =>
          fetch(
            `https://doctor-appointment-server-university.vercel.app/doctor-details/${params.id}`
          ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard/patient",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/myPrescription",
        element: <MyPrescription></MyPrescription>,
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <DoctorRoute>
            <AddDoctor></AddDoctor>
          </DoctorRoute>
        ),
      },
      {
        path: "/dashboard/mypatient",
        element: (
          <DoctorRoute>
            <MyPatient></MyPatient>
          </DoctorRoute>
        ),
      },
      {
        path: "/dashboard/prescription",
        element: (
          <DoctorRoute>
            <Prescription></Prescription>
          </DoctorRoute>
        ),
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allDoctors",
        element: (
          <AdminRoute>
            <AllDoctors></AllDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://doctor-appointment-server-university.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
