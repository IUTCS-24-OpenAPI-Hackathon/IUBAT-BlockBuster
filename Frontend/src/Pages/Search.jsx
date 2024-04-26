import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/appContext";
import NearByPlaces from "./NearByPlaces";
import PlacesNearby from "./PlacesNearby";

const Search = () => {
  const { location, geo, setNearby } = useAppContext();

  const [suggestion, setSuggestion] = useState([]);

  const [formData, setFormData] = useState({
    location: "",
    radius: "",
    filter: "",
    type: "",
  });

  useEffect(() => {
    if (location) {
      setFormData((prev) => ({
        ...prev,
        location: location?.myLocation?.address?.suburb,
      }));
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:4003/api/search/nearbyPlaces",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            location: formData.location,
            radius: formData.radius,
            filter: formData.filter,
            lat: geo.lat ? geo.lat : "",
            lon: geo.lon ? geo.lon : "",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();

      setNearby(data.places);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAutoSuggest = async (e) => {
    if (e.target.value) {
      //     let res =
      //       await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${
      //         e.target.value
      //       }&format=json&apiKey=${"07ca88d909324c73a34e34751ef5309c"}
      // `);
      // res = await res.json();
      // setSuggestion(res.results);
      setSuggestion([]);
    }
  };

  function debounce(func, delay) {
    let timeoutId;

    return function () {
      const context = this;
      const args = arguments;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }

  const debouncedInputHandler = (e) => debounce(handleAutoSuggest(e), 1500); // Debounce input handler with a delay of 500ms

  const handleLocationInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    debouncedInputHandler(e);
  };

  return (
    <>
      <PlacesNearby />
      <div className="flex justify-center items-center">
        <form
          className="text-center w-full"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label className="block mb-2 text-lg font-medium">
            Search Your Location
          </label>
          <div className="w-full flex">
            <div className="w-full">
              <input
                type="text"
                id="location"
                name="location"
                className="w-full px-4 py-1 border-2 rounded"
                placeholder="Dhaka"
                required
                value={formData.location}
                onChange={handleLocationInput}
                list="locations"
              />
              <datalist id="locations">
                {suggestion.length > 0 &&
                  suggestion.map((s, index) => (
                    <option key={index} value={s.formatted}>
                      {s.formatted}
                    </option>
                  ))}
              </datalist>
            </div>
            {/* Radius Dropdown */}
            <div className="w-full">
              <select
                id="radius"
                name="radius"
                className="w-full px-4 py-1 border-2 rounded"
                value={formData.radius}
                onChange={handleChange}
              >
                <option value="">None</option>
                <option value="5000">5km</option>
                <option value="10000">10km</option>
                <option value="15000">15km</option>
                <option value="20000">20km</option>
                <option value="30000">30km</option>
              </select>
            </div>
            <div className="w-full">
              <select
                id="filter"
                name="filter"
                className="w-full px-4 py-1 border-2 rounded"
                value={formData.filter}
                onChange={handleChange}
              >
                <option value="">None</option>
                <option value="building.healthcare">Hospital</option>
                <option value="catering.restaurant">Restaurant</option>
              </select>
            </div>
            <div className="w-full">
              <select
                id="type"
                name="type"
                className="w-full px-4 py-1 border-2 rounded"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="all">None</option>
                <option value="city">City</option>
                <option value="district">District</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
