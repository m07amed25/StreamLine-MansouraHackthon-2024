import React from 'react'
import tour from '../assets/tour.jpg'
function TourGuide() {
  return (
    <div className="grid grid-cols-2 p-6">
      <div>
        <img className="w-96 h-96" src={tour} alt="" />
      </div>
      
      <div>
        <p className="text-2xl">
          Experience Unforgetable trips With Our Profetional Tour Guids
        </p>
      </div>
    </div>
  );
}

export default TourGuide