import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
const Gps = () => {
  const [location, setLocation] = useState(null);
  
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error(error);
          // Handle errors here
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
     
    }
  };
  
  return (
    <div className='flex  flex-col'>
     
      <button className='flex justify-center items-center  text-lg font-bold text-blue-700' onClick={getLocation}> <FaLocationDot></FaLocationDot>Get Location</button>
      {location && (
        <div>
          Latitude: {location.latitude}<br />
          Longitude: {location.longitude}
        </div>
      )}
    </div>
  );
};

export default Gps;
