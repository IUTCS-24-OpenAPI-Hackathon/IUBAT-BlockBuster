import React from 'react';

const Fulldetails = ({feature}) => {
    return (
        <div>
        <h3 className='title'>
          {feature.location_name}
        </h3>
        <p className='font-bold'>Address: {feature.address}</p>
        <div className='flex justify-center my-5'>
          <img className='h-50 w-50' src={feature.image} alt="" />
        </div>
        <div className='text-justify'>
          <p><span className='font-bold'>Description:</span> {feature.description}</p>
          <p><span className='font-bold'>Longitude:</span> {feature.longitude}</p>
          <p><span className='font-bold'>Latitude:</span> {feature.latitude}</p>
          <p><span className='font-bold'>Temperature:</span> {feature.temperature_details.current_temperature}&deg;C</p>
        </div>
      </div>
      
    );
};

export default Fulldetails;