import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useAppContext } from "../../contexts/appContext";

const Gps = () => {
  // const [location, setLocation] = useState(null);

  const { location, setLocation, setGeo, localLocation, setLocalLocation } =
    useAppContext();

  const [error, setError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocalLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          sendLocation(position.coords.latitude, position.coords.longitude);
          setGeo({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
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
      const response = await fetch(
        "http://localhost:4003/api/search/myLocation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ lat: latitude, lon: longitude }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to send location data");
      }
      const responseData = await response.json();
      setLocation(responseData);
      setResponseMessage(responseData.message); // Update the response message state
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col">
      <button
        className="flex justify-center items-center text-lg font-bold text-blue-700"
        onClick={getLocation}
      >
        <FaLocationDot /> Get Location
      </button>
      {location && (
        <div>
          Latitude: {localLocation.latitude}
          <br />
          Longitude: {localLocation.longitude}
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default Gps;
