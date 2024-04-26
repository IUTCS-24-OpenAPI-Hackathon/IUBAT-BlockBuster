import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Fulldetails from './Fulldetails';

const Placedetails = () => {
    
        const [featues, setfetures] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const id = useParams().id; 
  // console.log(id);

  useEffect(() => {
    fetch(`fakedb.json`)
      .then(response => response.json())
      .then(data => setfetures(data))
      .catch(error => console.error('Error fetching JSON:', error));
  }, []);

  useEffect(() => {
    // Check if featues is not empty before attempting to find the item
    if (featues.length > 0) {
      const find = featues.find(f => f.id === parseInt(id));
      // console.log(find);
      setSelectedFeature(find);
    }
  }, [id, featues]);

  return (
    <div className='py-32 text-center px-12'>
      {selectedFeature ? (
        <Fulldetails feature={selectedFeature} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
    
};

export default Placedetails;