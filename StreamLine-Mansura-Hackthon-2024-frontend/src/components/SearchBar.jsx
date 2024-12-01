import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";


function SearchBar() {
  return (
    <form action="">
      <div className="w-full flex flex-col items-center h-40 pt-8 border-b border-b-gray-200">
        <div className="flex w-3/5 justify-center">
          <div className="w-1/2 bg-neutral-100 px-4 py-2 text-sm  text-gray-500 rounded-s-full border border-gray-200 flex items-center">
            <CiSearch className="inline mr-2 text-2xl text-black" />
            <input
              type="text"
              placeholder="Customize your trip..."
              className="focus:outline-none bg-neutral-100"
            />
          </div>
          <div className="w-1/2 flex justify-evenly px-4 py-2 rounded-e-full border border-gray-200 text-xs ">
            <div className="">
              <label className="cursor-pointer">
                <input type="checkbox" value="tours" className="hidden peer" />
                <div className="peer-checked:bg-yellow-400 peer-checked:text-white font-bold px-2 w-full text-center py-2  rounded-full text-black">
                  Tours
                </div>
              </label>
            </div>
            <div className="">
              <label className="cursor-pointer">
                <input type="checkbox" value="hotels" className="hidden peer" />
                <div className="peer-checked:bg-yellow-400 peer-checked:text-white font-bold px-2 w-full text-center py-2  rounded-full text-black">
                  Hotels
                </div>
              </label>
            </div>
            <div className="">
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  value="activities"
                  className="hidden peer"
                />
                <div className="peer-checked:bg-yellow-400 peer-checked:text-white font-bold px-2 w-full text-center py-2  rounded-full text-black">
                  Activities
                </div>
              </label>
            </div>
            <div className="">
              <label className="cursor-pointer">
                <input type="checkbox" value="car6" className="hidden peer" />
                <div className="peer-checked:bg-yellow-400 peer-checked:text-white font-bold px-2 w-full text-center py-2  rounded-full text-black">
                  Cars
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-3/5 pt-6">
          <div className="flex justify-between text-xs">
            <div className="mr-2 cursor-pointer bg-gray-100 border border-gray-300 rounded-full text-gray-700">
              <select class="appearance-none  cursor-pointer px-3 py-2 bg-gray-100 rounded-full focus:outline-none">
                <option selected disabled value="1">
                  Duration
                </option>

                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <MdKeyboardArrowDown className="inline pr-2 text-lg" />
            </div>
            <div className="mr-2 cursor-pointer bg-gray-100 border border-gray-300 rounded-full text-gray-700">
              <select class="appearance-none cursor-pointer px-3 py-2 bg-gray-100 rounded-full focus:outline-none">
                <option selected disabled value="1">
                  Rating
                </option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <MdKeyboardArrowDown className="inline pr-2 text-lg" />
            </div>
            <div className="mr-2 cursor-pointer bg-gray-100 border border-gray-300 rounded-full text-gray-700">
              <select class="appearance-none cursor-pointer px-3 py-2 bg-gray-100 rounded-full focus:outline-none">
                <option selected disabled value="1">
                  Budget
                </option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <MdKeyboardArrowDown className="inline pr-2 text-lg" />
            </div>
            <div className="mr-2 cursor-pointer bg-gray-100 border border-gray-300 rounded-full text-gray-700">
              <select class="appearance-none cursor-pointer px-3 py-2 bg-gray-100 rounded-full focus:outline-none">
                <option selected disabled value="1">
                  Language
                </option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <MdKeyboardArrowDown className="inline pr-2 text-lg" />
            </div>
          </div>
          <div>
            <button className=" border border-gray-300 rounded-full text-gray-700 px-3 py-2 text-xs">
             <span className="mr-2"> sort from high to low</span>
              <BiSortAlt2 className="inline pr-2 text-lg" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
