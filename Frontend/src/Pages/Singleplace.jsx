// eslint-disable-next-line react/prop-types
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Singleplace = ({ a }) => {
  return (
    <div>
      <div className="card mt-5">
        <div className="g-0 py-4 px-2 bg-slate-300 rounded-md">
          <FaLocationDot className="mx-auto my-3 text-5xl text-blue-800" />{" "}
          Address: {a.properties.address_line2}
          <div className="col-md-4 p-3">
            {/* <img src={a.image} className="w-full md:w-48 rounded object-cover" alt="..." /> */}
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">{a.properties.name}</h5>
              {/* <p className="card-text"> Longitude: {a.longitude}</p> */}
              <div className="flex align-middle"></div>
              <p className="card-text"></p>
            </div>
          </div>{" "}
          <br />
          <div className="">
            <Link
              to={`/nearbyPlaces/${a.properties.place_id}`}
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleplace;
