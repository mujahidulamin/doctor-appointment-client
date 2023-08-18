import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Prescription = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddPrescription = (data) => {
    const prescription = {
      patientName: data.name,
      patientEmail: data.email,
      category: data.category,
      medicine: data.medicine,
      day: data.day,
      take: data.take,
      doctorEmail: user?.email,
    };

    fetch(
      "https://doctor-appointment-server-university.vercel.app/prescription",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(prescription),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Prescription Created Successfully");
      });

    console.log(prescription);
  };

  const { user } = useContext(AuthContext);

  const url = `https://doctor-appointment-server-university.vercel.app/doctor-appointment?email=${user?.email}`;

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

  return (
    <div className=" p-5">
      <h2 className="text-5xl font-semibold text-center text-white">
        Add Prescription
      </h2>
      <form onSubmit={handleSubmit(handleAddPrescription)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="input input-bordered w-full "
          />
          {errors.name && (
            <p className="text-red-500" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="input input-bordered w-full "
          />
          {errors.email && (
            <p className="text-red-500" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="mt-5 grid gap-2 ">
          <p className="text-white">Select Consultation Category</p>
          <select
            className=" p-3 bg-slate-300 rounded"
            {...register("category", { required: "Category Required" })}
            required
          >
            <option value="General Physician">General Physician</option>
            <option value="Gynecology">Gynecology</option>
            <option value="Child Care / Pediatrics">
              Child Care / Pediatrics
            </option>
            <option value="Skin / Dermatology">Skin / Dermatology</option>
            <option value="Psychiatry">Psychiatry</option>
            <option value="Brain / Neurology">Brain / Neurology</option>
          </select>
          {errors.category && (
            <p className="text-red-500" role="alert">
              {errors.category?.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="mt-5 grid gap-2 w-[100%]">
            <p className="text-white">Select Medicine </p>
            <select
              className=" p-3 bg-slate-300 rounded"
              {...register("medicine")}
            >
              <option value="Acetaminophen">Acetaminophen</option>
              <option value="Adderall">Adderall</option>
              <option value="Amitriptyline">Amitriptyline</option>
              <option value="Amlodipine">Amlodipine</option>
              <option value="Amoxicillin">AdderAmoxicillinall</option>
              <option value="Ativan">Ativan</option>
              <option value="Azithromycin">Azithromycin</option>
            </select>

            {errors.category && (
              <p className="text-red-500" role="alert">
                {errors.category?.message}
              </p>
            )}
          </div>

          <div className="mt-5 grid gap-2 w-[100%]">
            <p className="text-white">Select Days </p>
            <select className=" p-3 bg-slate-300 rounded" {...register("day")}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            {errors.category && (
              <p className="text-red-500" role="alert">
                {errors.category?.message}
              </p>
            )}
          </div>

          <div className="mt-5 grid gap-2 w-[100%]">
            <p className="text-white">Take medicine in a day</p>
            <select className=" p-3 bg-slate-300 rounded" {...register("take")}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            {errors.category && (
              <p className="text-red-500" role="alert">
                {errors.category?.message}
              </p>
            )}
          </div>
        </div>
        <input
          className="btn btn-primary w-full my-5"
          value="Prescribe"
          type="submit"
        />
        {/* {
                                signUpError && <p className='text-red-500'>{signUpError}</p>
                            } */}
      </form>
    </div>
  );
};

export default Prescription;
