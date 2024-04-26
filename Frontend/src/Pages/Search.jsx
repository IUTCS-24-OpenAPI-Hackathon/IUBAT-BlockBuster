import React, { useState } from 'react';

const Search = () => {
  const [formData, setFormData] = useState({
    location: "",
    radius: "",
    filter: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://your-api-endpoint.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Optionally, reset the form data after successful submission
      setFormData({
        location: "",
        radius: "",
        filter: ""
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex justify-center items-center">
      <form className="text-center" onSubmit={handleSubmit}>
        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
          Search Your Location
        </label>
        <div className="flex mb-4">
          <input
            type="text"
            id="location"
            name="location"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Dhaka"
            required
            value={formData.location}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>

        {/* Radius Dropdown */}
        <div className="flex mb-4">
          <label
            htmlFor="radius"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Select Radius:{" "}
          </label>
          <select
            id="radius"
            name="radius"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.radius}
            onChange={handleChange}
          >
            <option value="">None</option>
            <option value="10km">10km</option>
            <option value="30km">30km</option>
            <option value="70km">70km</option>
            <option value="100km">100km</option>
            <option value="200km">200km</option>
          </select>
        </div>

        <div className="flex mb-4">
          <label
            htmlFor="filter"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Filter:{" "}
          </label>
          <select
            id="filter"
            name="filter"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.filter}
            onChange={handleChange}
          >
            <option value="">None</option>
            <option value="hospital">Hospital</option>
            <option value="park">Park</option>
            <option value="apartment">Apartment</option>
            <option value="museum">Museum</option>
            <option value="zoo">Zoo</option>
            <option value="natural_scene">Natural Scene</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Search;
