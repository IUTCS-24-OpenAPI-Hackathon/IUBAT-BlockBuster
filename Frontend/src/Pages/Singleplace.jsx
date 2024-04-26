import React from 'react';
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Singleplace = ({a}) => {
    console.log(a);
    return (
        <div>
        <div className="card mt-5">
        <div className="md:flex items-center justify-around g-0 py-4 px-2 bg-slate-300 rounded-md">
          <div className="col-md-4 p-3">
           <img src={a.image} className="w-full md:w-48 rounded object-cover" alt="..." />

          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">{a.location_name}</h5>
              <p className="card-text"> Longitude: {a.longitude}</p>
              <div className='flex align-middle'>
               <FaMoneyBill1Wave className='mr-2 mt-1' /> Latitude: {a.latitude}
               </div>
    <p className="card-text"><small className="text-body-secondary">
    Current Temperature: {a.temperature_details.current_temperature}&deg;C,
    Min Temperature: {a.temperature_details.min_temperature}&deg;C,
    Max Temperature: {a.temperature_details.max_temperature}&deg;C,
    Humidity: {a.temperature_details.humidity}%,
    Wind Speed: {a.temperature_details.wind_speed} km/h
  </small></p>
            </div>
          </div> <br />
          <div className=''>
          <Link to={`/NearPlaces/${a.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Details</Link>
        </div>
        </div>
       
      </div>
</div>
    );
};

export default Singleplace;