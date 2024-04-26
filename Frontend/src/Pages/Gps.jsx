import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import Search from './Search';

const Gps = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          sendLocation(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const sendLocation = async (latitude, longitude) => {
    try {
      const response = await fetch('http://localhost:4003/api/search/myLocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({lat: latitude, lon:longitude })
      });
      if (!response.ok) {
        throw new Error('Failed to send location data');
      }
      const responseData = await response.json();
      console.log(responseData);
      setResponseMessage(responseData.message); // Update the response message state
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='flex flex-col'>
      <button className='flex justify-center items-center text-lg font-bold text-blue-700' onClick={getLocation}>
        <FaLocationDot /> Get Location
      </button>
      {location && (
        <div>
          Latitude: {location.latitude}<br />
          Longitude: {location.longitude}

        </div>
      )}
   
      {error && <p>{error}</p>}
    </div>
  );
};

export default Gps;
