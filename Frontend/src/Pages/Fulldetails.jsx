/* eslint-disable react/prop-types */

const Fulldetails = ({ features }) => {
  const { formatted } = features.details.features[0].properties;
  // const { details } = features.details.features[0].properties;
  return (
    <div>
      <h3 className="title"></h3>
      <p className="font-bold">Address: {formatted}</p>
      <div className="flex justify-center my-5"></div>
    </div>
  );
};

export default Fulldetails;
