/* eslint-disable react/prop-types */

import NewReview from "./NewReview";
import Reviews from "./Reviews";

const Fulldetails = ({ features }) => {
  const { formatted, place_id } = features.details.features[0].properties;
  const { main, visibility, wind } = features.weather;
  const { name, categories, city, country, lat, lon } =
    features.details.features[0].properties;
  // const { details } = features.details.features[0].properties;
  return (
    <div className="bg-slate-300 rounded-md p-2">
      <h3 className="title"></h3>
      <p className="font-bold">Address: {formatted}</p>
      <p className="font-bold">Temperature: {main.temp}</p>
      <div className="font-bold">Visibility: {visibility}</div>
      <p>
        Wind Speed: <span className="font-bold"> {wind.speed}</span>{" "}
        Temperature: <span className="font-bold">{wind.deg} kelvin</span>
      </p>
      <p className="font-bold">Category: {(categories[0], categories[1])}</p>
      <p className="font-bold">Name: {name}</p>
      <p className="font-bold">City: {city}</p>
      <p className="font-bold">Country: {country}</p>
      <p>
        lat={lat} and lon= {lon}
      </p>

      <NewReview id={place_id} />

      <Reviews id={place_id} lat={lat} lon={lon} />
    </div>
  );
};

export default Fulldetails;
