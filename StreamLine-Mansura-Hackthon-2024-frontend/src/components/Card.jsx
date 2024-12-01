import React from "react";
import hotel1 from "../assets/hotel1.jpg";
import { FaStar } from "react-icons/fa6";

function Card({photo}) {
  return (
    <div className="w-1/4 flex flex-col relative ml-4 ">
      <img src={photo} alt="" className="h-full w-full rounded-3xl" />
      <div className="flex-col flex p-6 justify-center border border-gray-200 rounded-3xl z-30 absolute top-52 bg-white">
        <p className="text-xl font-bold ">Sinai Sunset/Twilighte boat cruise</p>
        <p className="text-sm text-gray-400">2 days/3 nights-Family</p>
        <div className="flex justify-between pt-6 relative ">
          <span className=" text-xs px-2 py-2 bg-white rounded-full absolute shadow-md z-40 top border border-gray-200 bottom-36 left-60">
           <FaStar className="text-yellow-300 inline"/> 5.00
          </span>
          <span className="font-bold text-xl">
            $ 48.25
            <span className="text-xs text-gray-400 font-light">
              / per person
            </span>
          </span>
          <button className=" text-xs px-4 py-2 bg-gray-200 border border-gray-300 font-bold rounded-full">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
