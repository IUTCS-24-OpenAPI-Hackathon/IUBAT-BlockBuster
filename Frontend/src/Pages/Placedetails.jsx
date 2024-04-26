import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Fulldetails from './Fulldetails';

const Placedetails = () => {

  const [features, setfetures] = useState([]);


  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:4003/api/search/${id}`)
      .then(response => response.json())
      .then(data => {
        setfetures(data);
        console.log(data);
      })

      .catch(error => console.error('Error fetching JSON:', error));
  }, []);
  console.log(features);


  return (
    <div className='py-32 text-center px-12'>
      {setfetures ? (
        <Fulldetails features={features} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

};

export default Placedetails;