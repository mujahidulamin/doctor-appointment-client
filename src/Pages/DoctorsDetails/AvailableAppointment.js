import React from "react";
import { format } from "date-fns";

const AvailableAppointment = ({ selectedDate, doctor }) => {
  // console.log(doctor);

  return (
    <div>
      <div>
        <div  className="text-center mt-20  font-semibold">
          <span>Availablity </span>
          <span className=""> {doctor?.AvailabilityWeekFrom}</span> -
          <span className=""> {doctor?.AvailabilityWeekTo}</span> <br />
          (<span className="text-sm">{doctor?.AvailabilityTimeFrom}</span> - 
          <span className="text-sm">{doctor?.AvailabilityTimeTo}</span>


          )
          </div>
      </div>
    </div>
  );
};

export default AvailableAppointment;
