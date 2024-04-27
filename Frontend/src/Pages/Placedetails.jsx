import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Fulldetails from "./Fulldetails";
import { AppContextProvider } from "../../contexts/appContext";

const Placedetails = () => {
  const [features, setFeatures] = useState([]);
  const [loaded, setLoaded] = useState(false);
 
  const id = useParams().id;

  useEffect(() => {
    fetch(`http://localhost:4003/api/search/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeatures(data);
        setLoaded(true);
      })

      .catch((error) => console.error("Error fetching JSON:", error));
  }, [id]);

  return (
    <div className="py-32 text-center px-12">
      {loaded && features.status ? (
        <Fulldetails features={features} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Placedetails;
