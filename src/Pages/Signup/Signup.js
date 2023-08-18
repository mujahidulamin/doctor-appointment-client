import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Shared/Header/Button";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login-page-animation.json";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const [data, setData] = useState("");
  const [signUpError, setSignUpError] = useState("");

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    // console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUserProfile(userInfo)
          .then(() => {
            saveUserToDb(data.name, data.email, data.category);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  const saveUserToDb = (name, email, category) => {
    const user = { name, email, category };
    fetch("https://doctor-appointment-server-university.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedUserEmail(email);
      });
  };

  return (
    <div
      style={{
        // background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="mt-16 bg-[#0F172A]"
    >
      <section className="sm:h-full md:h-full lg:h-screen">
        <div className="h-full">
          <div className="g-6 flex  md:h-cover h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 ">
              <Lottie animationData={loginAnimation}></Lottie>
            </div>

            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 ">
              <form
                className="p-5 mx-5 rounded-md"
                onSubmit={handleSubmit(handleSignUp)}
              >
                <div className="mb-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-white after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-5 md:text-4xl lg:text-5xl text-center font-semibold text-white ">
                    Create An Account
                  </p>
                </div>

                {/* <!-- Name input --> */}

                <div className="relative">
                  <p className="text-white">Enter Your Name </p>
                  <input
                    {...register("name", {
                      required: "Name Is Required",
                    })}
                    // autocomplete="off"
                    type="text"
                    className=" h-10 w-full p-2"
                    placeholder="Your Name"
                  />
                </div>
                {errors.name && (
                  <p role="alert" className="text-red-600 text-sm">
                    {errors.name?.message}
                  </p>
                )}

                {/* Email input */}
                <div className="relative mt-6 ">
                  <p className="text-white">Enter Your Email </p>
                  <input
                    {...register("email", {
                      required: "Email Is Required",
                    })}
                    type="email"
                    className=" h-10 w-full p-2"
                    placeholder="Email address"
                  />
                </div>
                {errors.email && (
                  <p role="alert" className="text-red-600 text-sm">
                    {errors.email?.message}
                  </p>
                )}

                {/* Select category*/}
                <div className="relative mt-6 ">
                  <p className="text-white">Select Category </p>
                  <select
                    className="w-full p-2 "
                    {...register("category", {
                      required: "Category Is Required",
                    })}
                  >
                    <option value="">Category</option>
                    <option value="Patient">Patient</option>
                    <option value="Doctor">Doctor</option>
                  </select>
                </div>
                {errors.category && (
                  <p role="alert" className="text-red-600 text-sm">
                    {errors.category?.message}
                  </p>
                )}

                {/* Image upload */}

                {/* <div className="relative mt-6">
                                    <p className='text-white'>Select Image </p>
                                    <input
                                        {...register("image",
                                            {
                                                required: 'Image Is Required'
                                            }
                                        )}
                                        className='h-10 w-full p-2 bg-white'
                                        type="file" />
                                </div>
                                {errors.image && <p role="alert" className='text-red-600 text-sm'>{errors.image?.message}</p>} */}

                {/* <!-- Password input --> */}
                <div className="relative mt-6">
                  <p className="text-white">Enter Your Password </p>
                  <input
                    {...register("password", {
                      required: "Password Is Required",
                      minLength: {
                        value: 6,
                        message: "Password must be atleast 6 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/,
                        message:
                          "Password Must be number and special characters",
                      },
                    })}
                    type="password"
                    className=" h-10 w-full p-2"
                    placeholder="Password"
                  />
                </div>
                {errors.password && (
                  <p role="alert" className="text-red-600 text-sm">
                    {errors.password?.message}
                  </p>
                )}
                <div className="text-center mt-6">
                  <div className="mb-3">
                    {signUpError && (
                      <p className="text-red-600 text-sm">{signUpError}</p>
                    )}
                  </div>
                  <Button type="submit">SIGN UP</Button>

                  <p className="text-base-300 mt-5  mb-0 pt-1 text-sm font-semibold">
                    Already have an account?{" "}
                    <Link className="text-[#E18B01] font-bold" to="/login">
                      LOGIN
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
