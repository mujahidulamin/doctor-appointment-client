import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading/Loading";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { user } = useContext(AuthContext);
  // console.log(user);

  const url = `https://doctor-appointment-server-university.vercel.app/allDoctorsInfo?email=${user?.email}`;

  const { data: allDoctorsInfo = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  console.log(allDoctorsInfo[0]?._id);

  const imageHostKey = "d0070356d677e13afe2bcba57fb03029";
  console.log(imageHostKey);

  // for consultation data
  const { data: consultations, isLoading } = useQuery({
    queryKey: ["consultation"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctor-appointment-server-university.vercel.app/consultation"
      );
      const data = await res.json();
      return data;
    },
  });

  // for doctor slot
  const { data: doctorsInfo = [] } = useQuery({
    queryKey: ["doctorsInfo"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctor-appointment-server-university.vercel.app/doctorsInfo"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    // console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    // save image in imgbb
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        // console.log(imageData);
        if (imageData.success) {
          // console.log(imageData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            designation: data.designation,
            hospital: data.hospital,
            TotalExperience: data.TotalExperience,
            specialities: data.specialities,
            id: data.id,
            price: data.price,
            About: data.About,
            image: imageData.data.url,
            slots: doctorsInfo[0].slots,
          };
          // console.log(doctor);

          // save doctor info to database
          fetch(
            "https://doctor-appointment-server-university.vercel.app/doctors",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(doctor),
            }
          )
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("Profile Created Successfully");
            });
        }
      });
  };

  const handleUpdateAddDoctor = (data) => {
    // console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    // save image in imgbb
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        // console.log(imageData);
        if (imageData.success) {
          // console.log(imageData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            designation: data.designation,
            hospital: data.hospital,
            TotalExperience: data.TotalExperience,
            specialities: data.specialities,
            id: data.id,
            price: data.price,
            About: data.About,
            image: imageData.data.url,
            slots: doctorsInfo[0].slots,
          };
          // console.log(doctor);

          // save doctor info to database
          fetch(
            `https://doctor-appointment-server-university.vercel.app/doctors?email=${user?.email}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(doctor),
            }
          )
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("Update Profile Successfully");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      {allDoctorsInfo[0]?.email ? (
        <div>
          <div className="p-5 lg:w-8/12 md:w-10/12 w-full mx-auto">
            <form
              className="p-5 mx-5 rounded-md"
              onSubmit={handleSubmit(handleUpdateAddDoctor)}
            >
              <div className="mb-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-white after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-5 md:text-4xl lg:text-5xl text-center font-semibold text-white ">
                  Add Your Information
                </p>
              </div>

              {/* <!-- Name input --> */}

              <div className="relative">
                <p className="text-white">Your Name </p>
                <input
                  {...register("name", {
                    required: "Name Is Required",
                  })}
                  // autocomplete="off"
                  type="text"
                  className=" h-10 w-full p-2"
                  // placeholder={user?.displayName}
                  defaultValue={user?.displayName}
                  readOnly
                />
              </div>
              {errors.name && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.name?.message}
                </p>
              )}

              {/* Email input */}
              <div className="relative mt-6 ">
                <p className="text-white">Your Email </p>
                <input
                  {...register("email", {
                    required: "Email Is Required",
                  })}
                  type="email"
                  className=" h-10 w-full p-2"
                  // placeholder="Email address"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
              {errors.email && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.email?.message}
                </p>
              )}

              {/* designation input */}
              <div className="relative mt-6 ">
                <p className="text-white">Enter Your designation </p>
                <input
                  {...register("designation", {
                    required: "Designation Is Required",
                  })}
                  type="text"
                  className=" h-10 w-full p-2"
                  placeholder="Enter Your Designation"
                  defaultValue={allDoctorsInfo[0]?.designation}
                />
              </div>
              {errors.designation && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.designation?.message}
                </p>
              )}

              {/* hospital input */}
              <div className="relative mt-6 ">
                <p className="text-white">Enter Your hospital name </p>
                <input
                  {...register("hospital", {
                    required: "hospital Is Required",
                  })}
                  type="text"
                  className=" h-10 w-full p-2"
                  placeholder="Enter Your hospital name"
                  defaultValue={allDoctorsInfo[0]?.hospital}
                />
              </div>
              {errors.hospital && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.hospital?.message}
                </p>
              )}

              {/* TotalExperience input */}
              <div className="relative mt-6 ">
                <p className="text-white">
                  Enter Your Total Experience (in year){" "}
                </p>
                <input
                  {...register("TotalExperience", {
                    required: "Total Experience Is Required",
                  })}
                  type="text"
                  className=" h-10 w-full p-2"
                  placeholder="Enter Your Total Experience year"
                  defaultValue={allDoctorsInfo[0]?.TotalExperience}
                />
              </div>
              {errors.TotalExperience && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.TotalExperience?.message}
                </p>
              )}

              {/* Select category*/}
              <div className="relative mt-6 ">
                <p className="text-white">Select Specialities Category </p>
                <select
                  className="w-full p-2 "
                  {...register("specialities", {
                    required: "Specialities Is Required",
                  })}
                  defaultValue={allDoctorsInfo[0]?.specialities}
                >
                  <option disabled selected>
                    Select One Specialities Category
                  </option>
                  {consultations?.map((consultation) => (
                    <option
                      key={consultation._id}
                      value={consultation?.treatment}
                    >
                      {consultation?.treatment}
                    </option>
                  ))}
                </select>
              </div>
              {errors.specialities && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.specialities?.message}
                </p>
              )}

              {/* Select category by id*/}
              <div className="relative mt-6 ">
                <p className="text-white">Select Consultation Category </p>
                <select
                  className="w-full p-2 "
                  {...register("id", {
                    required: "Consultation Is Required",
                  })}
                >
                  <option disabled selected>
                    {allDoctorsInfo[0]?.specialities}
                  </option>

                  {consultations?.map((consultation) => (
                    <option key={consultation._id} value={consultation?.id}>
                      {consultation?.treatment}
                    </option>
                  ))}
                </select>
              </div>
              {errors.id && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.id?.message}
                </p>
              )}

              {/* <!-- Price input --> */}
              <div className="relative mt-6">
                <p className="text-white">Enter Your Price </p>
                <input
                  {...register("price", {
                    required: "Price Is Required",
                  })}
                  type="number"
                  className=" h-10 w-full p-2"
                  placeholder="Price"
                  defaultValue={allDoctorsInfo[0]?.price}
                />
              </div>
              {errors.price && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.price?.message}
                </p>
              )}

              {/* About yourself input */}
              <div className="relative mt-6 ">
                <p className="text-white">About Yourself </p>
                <textarea
                  {...register("About", {
                    required: "About yourself Is Required",
                  })}
                  type="text"
                  className=" h-28 w-full p-2"
                  placeholder="About Yourself in 100 words "
                  defaultValue={allDoctorsInfo[0]?.About}
                />
              </div>
              {errors.About && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.About?.message}
                </p>
              )}

              {/* Image upload */}

              <div className="relative  mt-6">
                <p className="text-white">Upload An Image </p>
                <input
                  {...register("image", {
                    required: "Image Is Required",
                  })}
                  className="h-14 w-full p-2 bg-white"
                  type="file"
                />
              </div>
              {errors.image && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.image?.message}
                </p>
              )}

              <div className="text-center mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Update Profile"
                />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <div className="p-5 lg:w-8/12 md:w-10/12 w-full mx-auto">
            <form
              className="p-5 mx-5 rounded-md"
              onSubmit={handleSubmit(handleAddDoctor)}
            >
              <div className="mb-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-white after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-5 md:text-4xl lg:text-5xl text-center font-semibold text-white ">
                  Add Your Information
                </p>
              </div>

              {/* <!-- Name input --> */}

              <div className="relative">
                <p className="text-white">Your Name </p>
                <input
                  {...register("name", {
                    required: "Name Is Required",
                  })}
                  // autocomplete="off"
                  type="text"
                  className=" h-10 w-full p-2"
                  // placeholder={user?.displayName}
                  defaultValue={user?.displayName}
                  readOnly
                />
              </div>
              {errors.name && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.name?.message}
                </p>
              )}

              {/* Email input */}
              <div className="relative mt-6 ">
                <p className="text-white">Your Email </p>
                <input
                  {...register("email", {
                    required: "Email Is Required",
                  })}
                  type="email"
                  className=" h-10 w-full p-2"
                  // placeholder="Email address"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
              {errors.email && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.email?.message}
                </p>
              )}

              {/* designation input */}
              <div className="relative mt-6 ">
                <p className="text-white">Enter Your designation </p>
                <input
                  {...register("designation", {
                    required: "Designation Is Required",
                  })}
                  type="text"
                  className=" h-10 w-full p-2"
                  placeholder="Enter Your Designation"
                />
              </div>
              {errors.designation && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.designation?.message}
                </p>
              )}

              {/* hospital input */}
              <div className="relative mt-6 ">
                <p className="text-white">Enter Your hospital name </p>
                <input
                  {...register("hospital", {
                    required: "hospital Is Required",
                  })}
                  type="text"
                  className=" h-10 w-full p-2"
                  placeholder="Enter Your hospital name"
                />
              </div>
              {errors.hospital && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.hospital?.message}
                </p>
              )}

              {/* TotalExperience input */}
              <div className="relative mt-6 ">
                <p className="text-white">
                  Enter Your Total Experience (in year){" "}
                </p>
                <input
                  {...register("TotalExperience", {
                    required: "Total Experience Is Required",
                  })}
                  type="text"
                  className=" h-10 w-full p-2"
                  placeholder="Enter Your Total Experience year"
                />
              </div>
              {errors.TotalExperience && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.TotalExperience?.message}
                </p>
              )}

              {/* Select category*/}
              <div className="relative mt-6 ">
                <p className="text-white">Select Specialities Category </p>
                <select
                  className="w-full p-2 "
                  {...register("specialities", {
                    required: "Specialities Is Required",
                  })}
                >
                  <option disabled selected>
                    Select One Specialities Category
                  </option>
                  {consultations?.map((consultation) => (
                    <option
                      key={consultation._id}
                      value={consultation?.treatment}
                    >
                      {consultation?.treatment}
                    </option>
                  ))}
                </select>
              </div>
              {errors.specialities && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.specialities?.message}
                </p>
              )}

              {/* Select category by id*/}
              <div className="relative mt-6 ">
                <p className="text-white">Select Consultation Category </p>
                <select
                  className="w-full p-2 "
                  {...register("id", {
                    required: "Consultation Is Required",
                  })}
                >
                  <option disabled selected>
                    Select One Consultation Category
                  </option>

                  {consultations?.map((consultation) => (
                    <option key={consultation._id} value={consultation?.id}>
                      {consultation?.treatment}
                    </option>
                  ))}
                </select>
              </div>
              {errors.id && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.id?.message}
                </p>
              )}

              {/* <!-- Price input --> */}
              <div className="relative mt-6">
                <p className="text-white">Enter Your Price </p>
                <input
                  {...register("price", {
                    required: "Price Is Required",
                  })}
                  type="number"
                  className=" h-10 w-full p-2"
                  placeholder="Price"
                />
              </div>
              {errors.price && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.price?.message}
                </p>
              )}

              {/* About yourself input */}
              <div className="relative mt-6 ">
                <p className="text-white">About Yourself </p>
                <textarea
                  {...register("About", {
                    required: "About yourself Is Required",
                  })}
                  type="text"
                  className=" h-28 w-full p-2"
                  placeholder="About Yourself in 100 words "
                />
              </div>
              {errors.About && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.About?.message}
                </p>
              )}

              {/* Image upload */}

              <div className="relative  mt-6">
                <p className="text-white">Upload An Image </p>
                <input
                  {...register("image", {
                    required: "Image Is Required",
                  })}
                  className="h-14 w-full p-2 bg-white"
                  type="file"
                />
              </div>
              {errors.image && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.image?.message}
                </p>
              )}

              <div className="text-center mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Create Your Profile"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddDoctor;
