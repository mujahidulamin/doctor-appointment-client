import React from "react";
import "./Footes.css";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// import { FaMapMarkerAlt } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaWarehouse } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

//Footer section
const Footer = () => {
  return (
    <div className="bg-footer">
      <div className="bg-slate-50">
        <footer className="footer p-10  text-base-content">
          <div className="">
            <img src={logo} alt="" className="w-52 mb-3" />
            <p className="text-2xl">
              <div className="flex items-center gap-3">
                <FaPhoneSquareAlt />
                +880 1521205892
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneSquareAlt />
                +880 1768670013
              </div>
              <div className="flex items-center gap-3">
                <FaWarehouse />
                support@doctorian.com.bd
              </div>
            </p>
          </div>

          <div className="uppercase font-semibold">
            <Link className="link link-hover">About Us</Link>
            <Link className="link link-hover">Blog</Link>
            <Link className="link link-hover">Faq</Link>
            <Link className="link link-hover">Sign Up</Link>
          </div>

          <div className="uppercase font-semibold">
            <Link className="link link-hover">Contact Us</Link>
            <Link className="link link-hover">Terms & Conditions</Link>
            <Link className="link link-hover">Privacy Policy</Link>
            <Link className="link link-hover">Help</Link>
          </div>
          <div>
            <span className="uppercase font-semibold">Social</span>
            <div className="grid grid-flow-col gap-4 text-[25px]">
              <Link>
                <FaFacebookF />
              </Link>
              <Link>
                <FaTwitter />
              </Link>
              <Link>
                <FaInstagram />{" "}
              </Link>
            </div>
          </div>
        </footer>
        <div className="border-bottom-footer"></div>

        <div className="text-center text-black mt-6 mb-6 text-xl font-semibold">
          Copyright © 2022 Doc<span className="text-[#EE454A]">torian</span>. All rights reserved.
        </div>
      </div>
      {/* <div className="hero ">
        <div className="hero-content2 lg:gap-36 flex-col lg:flex-row mt-8">
          <div className="lg:text-left">
            <div className="mt-12">
              <p className="title-contact">WE'D LOVE TO HERE FROM YOU</p>

              <div className="flex items-center contact mt-10">
                <FaWarehouse className="mr-6"></FaWarehouse>
                <span>sojeebahmed.sa@gmail.com</span>
              </div>

              <div className="flex items-center mt-5 contact">
                <FaMapMarkerAlt className="mr-6"></FaMapMarkerAlt>
                <span>

                  Dhaka, Bangladesh
                </span>
              </div>

              <div className="flex items-center contact mt-5">
                <FaPhoneAlt className="mr-6"></FaPhoneAlt>
                <span>+880 1768670013</span>
              </div>

              <div>
                <h1 className="title-contact mt-24 mb-5">FOLLOW US</h1>
                <div className="flex">
                  <a
                    href="https://www.linkedin.com/company/ermin-automotive/mycompany/"
                    className="mr-8"
                    target="blank"
                  >
                    <FaLinkedin></FaLinkedin>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100066954733805"
                    className="mr-8"
                    target="blank"
                  >
                    <FaFacebookF></FaFacebookF>
                  </a>
                  <a
                    href="https://www.instagram.com/erminautomotive/"
                    className="mr-8"
                    target="blank"
                  >
                    <FaInstagram></FaInstagram>
                  </a>
                  <a
                    href="https://twitter.com/ErminAutomotive"
                    className="mr-8"
                    target="blank"
                  >
                    <FaTwitter></FaTwitter>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="mt-12 title-contact mb-10">QUICK CONTACT</h1>
            <form>
              <div className="flex justify-between ">
                <input
                  type="text"
                  className="input-bg w-5/12"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  className="input-bg w-5/12"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  className="input-bg mt-8 w-full"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div>
                <input
                  name="message"
                  className="input-bg mt-10 w-full mb-10"
                  placeholder="Message"
                  required
                />
              </div>

              <div className="form-control mt-4">
                <input
                  className="btn btn-outline btn-success"
                  type="submit"
                  value="SUBMIT"
                  required
                />
              </div>
              <div className="mt-8 text-gray-600">
                <small className="text-inherit">
                  @ Copyright © 2021 Ermin Automotive. All rights reserved
                </small>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
