import React from 'react';

const Fulldetails = ({ feature }) => {
  return (
    <div>
      <h3 className='title'>
        {feature.location_name}
      </h3>
      <p className='font-bold'>Address: {feature.properties.name}</p>
      <div className='flex justify-center my-5'>

      </div>

    </div>

  );
};

export default Fulldetails;