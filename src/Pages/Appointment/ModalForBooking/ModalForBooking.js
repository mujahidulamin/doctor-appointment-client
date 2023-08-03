import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import InputMask from 'react-input-mask';

const ModalForBooking = ({ doctorForTreatment, setDoctorForTreatment, selectedDate, refetch }) => {
    const { name, slots, designation, hospital, specialities, image, price, email: doctorEmail } = doctorForTreatment; //doctorForTreatment is in another name of appointment
    const date = format(selectedDate, 'PP');

    console.log(doctorForTreatment);

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.patientName.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            doctorName: name,
            doctorEmail,
            doctorImage: image,
            designation: designation,
            specialities: specialities,
            hospital: hospital,
            patientName,
            slot,
            price,
            patientEmail: email,
            patientPhone: phone

        }

        /**
         * TODO: send data to the server
         * and once data is saved then close the modal 
         * and display toast
         */

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
                    setDoctorForTreatment(null);
                    toast.success('Booking Confirmed')
                    refetch();
                }
                else {
                    toast.error(data.message);
                    setDoctorForTreatment(null);


                }
            })

        // console.log(booking);


    }

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex gap-5 mb-5'>
                        <div>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src={image} alt='' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3"> Dr. {name}</h3>
                            <p className="text-sm font-semibold mb-8">{specialities}</p>
                        </div>
                    </div>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4'>
                        <input type="text" value={date} disabled className="input input-bordered input-info w-full " />
                        <select name="slot" className="select select-info w-full ">

                            {
                                slots?.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="patientName" defaultValue={user?.displayName} readOnly required type="text" placeholder="Enter Your Name" className="input input-bordered input-info w-full " />
                        <input name="email" defaultValue={user?.email} readOnly required type="email" placeholder="Enter Your Email" className="input input-bordered input-info w-full " />


                        {/* <input name="phone" maxLength={11} required type="text" placeholder="Enter Your phone number" className="input input-bordered input-info w-full " /> */}
                        <InputMask
                            required
                            className="input input-bordered input-info w-full"
                            name="phone"
                            mask="99999-999999" // specify the desired phone number format
                            placeholder="Enter phone number"

                        />

                        <input type="submit" className='bg-[#38BDF8] text-lg text-white font-[Poppins] py-2  rounded hover:bg-[#07acf3]
                        duration-800 font-semibold cursor-pointer text-center w-full ' value="Submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default ModalForBooking;