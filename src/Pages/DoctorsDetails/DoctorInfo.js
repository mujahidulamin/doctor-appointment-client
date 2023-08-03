import React from "react";




const DoctorInfo = ({ doctor }) => {
  // console.log(doctor);

//   const imgData = [
//     {
//         _id: 30,
//         img: 'tmi',
//         title: 'Wedding Events',
//         tag: 'Wedding',
//     },
//     {
//         _id: 31,
//         img: 'ami',
//         title: 'Social Meetings',
//         tag: 'Social',
//     },
//     {
//         _id: 33,
//         img: 'he',
//         title: 'Birthday Parties',
//         tag: 'Birthday',
//     },
// ]
//   const [tag, setTag] = useState("all");
//   const [allimgData, setAllimgData] = useState(imgData);
//   useEffect(() => {
//     console.log(allimgData);
//     if (tag === "Birthday") {
//       const filterimgData = imgData.filter((item) => item.tag === "Birthday");
//       setAllimgData(filterimgData);
//     }
//     if (tag === "Wedding") {
//       const filterimgData = imgData.filter((item) => item.tag === "Wedding");
//       setAllimgData(filterimgData);
//     }
//     if (tag === "Social") {
//       const filterimgData = imgData.filter((item) => item.tag === "Social");
//       setAllimgData(filterimgData);
//     }
//   }, [tag]);

  return (
    <div>
      {/* <div className="my-20 lg:mx-32 mx-5">
      <div className="flex mb-5 gap-4">
        <button
          className={`button text-[18px] pb-2 text-primary ${
            tag === "Wedding" ? "border-b-2 border-primary" : ""
          }`}
          onClick={() => setTag("Wedding")}
        >
          Wedding Events
        </button>
        <button
          className={`button text-[18px] pb-2 text-primary ${
            tag === "Birthday" ? "border-b-2 border-primary" : ""
          }`}
          onClick={() => setTag("Birthday")}
        >
          Birthday Events
        </button>
        <button
          className={`button text-[18px] pb-2 text-primary ${
            tag === "Social" ? "border-b-2 border-primary" : ""
          }`}
          onClick={() => setTag("Social")}
        >
          Social Events
        </button>
      </div>
      
      <div className=" grid gap-[1px] lg:grid-cols-4 grid-cols-2">
        {allimgData.map((item) => (
          <div key={item._id} className="relative">
            <p>{item.img}</p>
          </div>
        ))}
      </div>
    </div> */}


      <h2 className="text-2xl font-semibold">About <span className="font-bold">{doctor.name} - {doctor.designation}</span></h2>
      <p className="text-justify text-gray-500 mt-3 ">{doctor.About}</p>



    </div>
  );
};

export default DoctorInfo;
