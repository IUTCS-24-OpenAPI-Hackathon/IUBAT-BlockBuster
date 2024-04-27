import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Reviews = ({ id, lat, lon }) => {
  const [rvs, setRvs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4003/api/reviews/${id}/${lat}/${lon}`)
      .then((response) => response.json())
      .then((data) => {
        setRvs(data);
        setLoaded(true);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, [id, lat, lon]);

  console.log(rvs);

  let content = null;
  if (loaded && rvs.length > 0) {
    content = rvs.map((r, k) => <p key={k}> </p>);
  }
  return (
    <div>
      <h1 className="text-2xl my-4">Reviews</h1>
      <div>{content}</div>
    </div>
  );
};

export default Reviews;
