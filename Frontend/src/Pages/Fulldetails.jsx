/* eslint-disable react/prop-types */

const Fulldetails = ({ features }) => {
  const { formatted } = features.details.features[0].properties;
  console.log(features);
  const { main, visibility, wind } = features.weather;
  const { name, categories, city, country, lat, lon } = features.details.features[0].properties
  // const { details } = features.details.features[0].properties;
  return (
    <div className="bg-slate-300 rounded-md p-2">
      <h3 className="title"></h3>
      <p className="font-bold">Address: {formatted}</p>
      <p className="font-bold">Temperature: {main.temp}</p>
      <div className="font-bold">Visibility: {visibility}</div>
      <p className="font-bold">Wind Speed: {wind.speed} Degree:{wind.deg}</p>
      <p className='font-bold'>Category: {categories[0], categories[1]}</p>
      <p className='font-bold'>Name: {name}</p>
      <p className='font-bold'>City: {city}</p>
      <p className='font-bold'>Country: {country}</p>
      <p>lat={lat} and lon= {lon}</p>
    </div>
  );
};

export default Fulldetails;
