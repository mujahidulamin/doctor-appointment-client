import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaAccessibleIcon } from "react-icons/fa";

import img from "../../../assets/images/cavity.png";
import img1 from "../../../assets/doctor/doctor-1.png";
import img2 from "../../../assets/doctor/doctor-2-removebg-preview.png";
import img3 from "../../../assets/doctor/doctor-3-removebg-preview.png";

import "./HomeCarousel.css";

const HomeCarousel = () => {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     vertical: true,
  //     verticalSwiping: true,
  //     beforeChange: function (currentSlide, nextSlide) {
  //       console.log("before change", currentSlide, nextSlide);
  //     },
  //     afterChange: function (currentSlide) {
  //       console.log("after change", currentSlide);
  //     },

  const text = [
    {
      image: "https://i.ibb.co/HH62Vdq/fast-growth.png",
      data: "Fast Growth",
    },
    {
      image: "https://i.ibb.co/Mchj0LX/electrification.png",
      data: "Electrification",
    },
    {
      image: "https://i.ibb.co/G94V4nB/relationship.png",
      data: "Direct Relationship",
    },
  ];

  const renderThumbs = () => {
    return text.map((data, index) => {
      return (
        <div key={index} style={{ height: 50, width: 50 }}>
          <img src={data.image} className="unique" alt="" />
          <p className="data">{data.data}</p>
        </div>
      );
    });
  };

  return (
    // <div className="strategy-bg">
    //   <Slider {...settings}>
    //     <div>
    //       <img
    //         src={img}
    //         alt=""
    //         className="strategy-img"
    //       />
    //     </div>
    //     <div>
    //       <img
    //         src={img1}
    //         alt=""
    //         className="strategy-img"
    //       />
    //     </div>
    //   </Slider>
    // </div>

    <div className="strategy-bg">
      <Carousel
        showIndicators={false}
        showStatus={false}
        thumbWidth={140}
        className="testing"
        infiniteLoop
        useKeyboardArrows
        renderThumbs={renderThumbs}
      >
        <div className="pt-24">
          <h1 className="text-center text-white text-5xl font-bold mb-5">
            When to use Doctorian
          </h1>
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={img1} alt="" />
              <div className="text-white text-left">
                <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold mx-20">
                  Common Health Issue
                </h1>
                <p className="py-6 mx-20 text-xl">
                  Ask anything you would normally ask your GP. You can have an
                  instant video with one of our GPs via a digital consultation
                  from anywhere, at any time of day. connect with the right
                  specialist doctor and to stay healthy. More than 20 different
                  specialities are available on DocTime. connect with the right
                  specialist doctor and to stay healthy. More than 20 different
                  specialities are available on DocTime.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="pt-10">
          <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={img1} alt =""/>
              <div className="text-white text-left">
                <h1 className="text-5xl font-bold mx-14">
                  Common Health Issue
                </h1>
                <p className="py-6 mx-14 text-xl">
                  Ask anything you would normally ask your GP. You can have an
                  instant video with one of our GPs via a digital consultation
                  from anywhere, at any time of day.
                  connect with the right specialist doctor and to stay healthy.
                  More than 20 different specialities are available on DocTime.
                  connect with the right specialist doctor and to stay healthy.
                  More than 20 different specialities are available on DocTime.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="pt-24">
          <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={img2} alt="" />
              <div className="text-white text-left">
                <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold mx-24">
                  Specialist Advice
                </h1>
                <p className="py-6 mx-24 text-xl">
                  Sometimes it’s helpful to see a specialist when you want. For
                  gynaecology, child specialists, dermatology, cardiology,
                  gastroenterology, nutrition,chronic diseases such as
                  hypertension, or other conditions, DocTime can help you to
                  connect with the right specialist doctor and to stay healthy.
                  More than 20 different specialities are available on DocTime.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24">
          <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={img3} alt="" />
              <div className="text-white text-left">
                <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold mx-24">
                  Mental Health and Wellbeing
                </h1>
                <p className="py-6 mx-24 text-xl">
                  In a fast paced world, it is important to monitor and protect
                  your mental health and wellbeing. Doctors can help you stay
                  healthy whether you have symptoms at home or in your workplace
                  of stress, smoking, anxiety, bereavement or depression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <div className='border-bottom'>

            </div>
    </div>
  );
};

export default HomeCarousel;
