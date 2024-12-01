import React from "react";
import ac1 from '../assets/ac1.jpg';
import ac2 from '../assets/ac2.jpg';
import ac3 from '../assets/ac3.jpg';
import ac4 from '../assets/ac4.jpg';
import hotel1 from '../assets/hotel1.jpg'
import hotel2 from '../assets/hotel2.jpg'
import hotel3 from '../assets/hotel3.jpg'
import hotel4 from '../assets/hotel4.jpg'
import backgroundImage from "../assets/py.jpg";



import Card from "./Card";

function Slider() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col w-full justify-center text-center">
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            
            backgroundRepeat: "no-repeat",
          }}
          className="w-full flex flex-col justify-center items-center bg-fixed bg-cover bg-center h-[600px]"
        >
          <p className="text-7xl mb-6 text-yellow-400 font-bold">
            Your Journey, Your Way
          </p>
          <p className="text-2xl text-white  font-bold">
            Discover Egypt's Treasures With TrivAlone
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mt-10 flex justify-between px-12">
          <p className="text-4xl pt-4 pl-8 font-bold text-gray-400 ">
            Top Rated Hotels
          </p>
          <button className=" text-sm px-6 py-4 bottom-14  bg-yellow-400 font-bold rounded-full z-200">
            View More
          </button>
        </div>
        <div className="flex justify-evenly mt-12 px-6">
          <Card photo={hotel1} />
          <Card photo={hotel2} />
          <Card photo={hotel3} />
          <Card photo={hotel4} />
        </div>
        <div className="mt-52 flex justify-between px-12">
          <p className="text-4xl pt-4 pl-8 font-bold text-gray-400 ">
            Best Activities
          </p>
          <button className=" text-sm px-6 py-4 bottom-14  bg-yellow-400 font-bold rounded-full z-200">
            View More
          </button>
        </div>

        <div className="mt-6 flex justify-evenly p-6">
          <div className="w-1/5 relative">
            <img src={ac1} alt="" className="w-full rounded-lg h-96" />
            <p className="mb-4 absolute bottom-64 z-200 p-6 text-4xl text-white font-bold">
              Ski Diving
            </p>
            <button className=" text-sm px-6 py-4 absolute bottom-6 left-40  bg-yellow-400 font-bold rounded-full z-200">
              Book Now
            </button>
          </div>
          <div className="w-1/5 relative">
            <img src={ac2} alt="" className="w-full rounded-lg h-96" />
            <p className="mb-4 absolute bottom-64 z-200 p-6 text-4xl text-white font-bold">
              Nile Cruise
            </p>
            <button className=" text-sm px-6 py-4 absolute bottom-6 left-40  bg-yellow-400 font-bold rounded-full z-200">
              Book Now
            </button>
          </div>
          <div className="w-1/5 relative">
            <img src={ac3} alt="" className="w-full rounded-lg h-96" />
            <p className="mb-4 absolute bottom-64 z-200 p-6 text-4xl text-white font-bold">
              Siwa Oisis
            </p>
            <button className=" text-sm px-6 py-4 absolute bottom-6 left-40  bg-yellow-400 font-bold rounded-full z-200">
              Book Now
            </button>
          </div>
          <div className="w-1/5 relative">
            <img src={ac4} alt="" className="w-full rounded-lg h-96" />

            <p className="mb-4 absolute bottom-64 z-200 p-6 text-4xl text-white font-bold">
              Sky Baloon
            </p>
            <button className=" text-sm px-6 py-4 absolute bottom-6 left-40  bg-yellow-400 font-bold rounded-full z-200">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
