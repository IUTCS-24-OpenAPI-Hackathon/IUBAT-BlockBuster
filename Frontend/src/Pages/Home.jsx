import React from 'react';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div>
           Home 
           <Banner></Banner><br></br>
           <div className="flex justify-center items-center">
  <form className="text-center">
    <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Search Your Location</label>
    <div className="flex">
      <input
        type="text"
        id="location"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Dhaka"
        required
      />
      <button
        type="submit"
        className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </div>
  </form>
</div>

        </div>
    );
};

export default Home;