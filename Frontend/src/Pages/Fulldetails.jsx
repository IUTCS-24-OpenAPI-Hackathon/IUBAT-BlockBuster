import React from 'react';

const Fulldetails = ({ features }) => {
  console.log(features.details);
  // const { details } = features.details.features[0].properties;
  const updatedDetails = features;
  // console.log(updatedDetails)
  return (
    <div>
      <h3 className='title'>

      </h3>
      {/* <p className='font-bold'>Address: {details.name}</p> */}
      <div className='flex justify-center my-5'>

      </div>

    </div>

  );
};

export default Fulldetails;