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
      .catch((error) => {
        console.error("Error fetching JSON:", error);
        setLoaded(true);
      });
  }, [id, lat, lon]);

  let content = null;
  let content2 = null;
  if (loaded) {
    content = rvs.oldReviews.map((r, k) => (
      <p key={k} className="italic">
        {" "}
        {r.text}{" "}
      </p>
    ));
    content2 = rvs.reviews.map((r, k) => <p key={k}> {r.text} </p>);
  }

  return (
    <div>
      <h1 className="text-2xl my-4">Reviews</h1>
      <div className="w-full bg-gray-100 text-start grid gap-2 p-4">
        <h2 className="text-xl my-4 font-semibold">Reviews from the web</h2>
        <div className="grid gap-2 ">{content}</div>
        <h2 className="text-xl my-4 font-semibold">
          Reviews from the Platform
        </h2>
        <div className="grid gap-2 ">{content2}</div>
      </div>
    </div>
  );
};

export default Reviews;
