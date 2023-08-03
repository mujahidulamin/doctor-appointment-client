import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, stickyTopSpace }) => {
  const { title, body, img } = data;
  // console.log(stickyTopSpace);

  return (
    <div
      className={`sticky grid grid-cols-1 overflow-hidden rounded-xl bg-blue-50 shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.1)] md:grid-cols-2`}
      style={{ top: stickyTopSpace }}
    >
      <div className="flex flex-col justify-center p-10">
        <div className="space-y-4 pt-16 pb-10">
          <h2 className="font-serif text-5xl -mb-2">{title}</h2>
          <p className="lg:w-3/4 text-lg">{body}</p>
          {/* <Link
            to="/"
            className="inline-flex rounded-lg hover:bg-emerald-700 transition bg-emerald-600 px-4 py-2 font-medium text-white"
          >
            Read more
          </Link> */}
        </div>
      </div>
      <div className="relative min-h-[200px] md:min-h-[450px]">
        <img
          src={img}
          alt=""
          className="absolute lg:inset-16 md:inset-5 inset-0 block lg:w-[300px] md:w-[400px] w-[200px] object-cover mx-auto"
        />
      </div>
    </div>
  );
};

export default Card;
