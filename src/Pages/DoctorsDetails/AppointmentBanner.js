import React from "react";
import { DayPicker } from "react-day-picker";
import { Link } from "react-router-dom";
const AppointmentBanner = ({ selectedDate, setSelectedDate, doctor }) => {

  const disabledDays = [
    { from: new Date(2000, 1, 1), to: new Date(2023, 3, 2) },
  ];

  return (
   <div></div>
  );
};

export default AppointmentBanner;
