import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Reviews = ({ id }) => {
  const [rvs, setRvs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4003/api/reviews/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRvs(data);
        setLoaded(true);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, [id]);

  console.log(rvs);
  return (
    <div>
      <h1 className="text-2xl my-4">Reviews</h1>
    </div>
  );
};

export default Reviews;
