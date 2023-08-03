import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-[#07acf3] text-white font-[Poppins] py-2 px-6 rounded  hover:bg-[#38BDF8]
    duration-800 font-semibold"
    >
      {props.children}
    </button>
  );
};

export default Button;
