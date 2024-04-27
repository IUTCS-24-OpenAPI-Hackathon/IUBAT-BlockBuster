import { useContext, useState } from "react";
import { AuthContext } from "../providers/UserContext";

// eslint-disable-next-line react/prop-types
const NewReview = ({ id }) => {
  const { user } = useContext(AuthContext);

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:4003/api/reviews/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: rating,
        review: review,
        place_id: id,
        firebase_id: user.uid,
        email: user.email,
      }),
    });
  };

  return (
    <div>
      <h1 className="text-2xl my-4">Add New Review</h1>
      <form onSubmit={handleSubmit}>
        <div className="max-w-[600px] mx-auto flex">
          <div className="w-full">
            <input
              type="number"
              className="w-full px-4 py-1 border-2 rounded"
              min="1.0"
              max="5.0"
              step="0.1"
              placeholder="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              className="w-full px-4 py-1 border-2 rounded"
              placeholder="Review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewReview;
