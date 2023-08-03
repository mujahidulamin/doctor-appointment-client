import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "./../../../contexts/AuthProvider";


const BookingModal = ({ doctor, selectedDate }) => {
  const {
    // specialities,
    user
  } = useContext(AuthContext);

  // console.log(specialities);
  // console.log(doctor);
  // console.log(user);
  const date = format(selectedDate, 'PP')

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const timeFrom = form.timeFrom.value;
    const timeTo = form.timeTo.value;


    // const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const patientPhone = form.phone.value;
    const doctorName = doctor.name;
    const doctorspeciality = doctor?.specialities;

    // console.log(date, slot, patientName, phone, email);

    const booking = {
      appointmentDate: date,
      // slot: slot,
      appointmentTImeFrom: timeFrom,
      appointmentTImeTo: timeTo,
      email,
      doctorspeciality,
      patientName,
      patientPhone,
      doctorName
    }
    console.log(booking);

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          event.target.reset();
          alert('Booking Comfirm')
        }

      })
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-3xl font-bold text-green-700">{doctor?.specialities} Specialist</h3>
          <h3 className="text-2xl mt-1 inline-block mr-2 ">Dr. {doctor?.name}
          </h3>
          ( <p className="inline-block text-xs">
            <span className="text-xs">{doctor?.AvailabilityTimeFrom}</span> -
            <span className="text-xs">{doctor?.AvailabilityTimeTo}</span>
          </p> )
          <p className="text-red-600">Maximum Appointmenent Time 30 Min</p>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-8'>
            <input type="date" name="date" required className="input w-full input-bordered" />
            <input type="time" name="timeFrom" required className="input w-full input-bordered" />
            <input type="time" name="timeTo" required className="input w-full input-bordered" />
            {/* <select name='slot' className="select select-bordered w-full">
              {
                doctor.slots.map((slot, id) => <option
                  key={id}
                  value={slot}
                >{slot}</option>)
              }
            </select> */}
            <input defaultValue={user?.displayName} readOnly name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" />
            <input defaultValue={user?.email} readOnly name='email' type="email" placeholder="Email Address" className="input w-full input-bordered" />
            <input name='phone' type="number" placeholder="Phone Number" required className="input w-full input-bordered" />
            <input className='w-full btn btn-accent' type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
