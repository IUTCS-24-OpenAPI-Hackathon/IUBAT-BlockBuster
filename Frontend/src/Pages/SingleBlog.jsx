import { useEffect, useState } from "react";
import { FaClock, FaUser } from "react-icons/fa";

const SingleBlog = () => {
  const [data, setBlogs] = useState([]);

  useEffect(() => {
    fetch("generated.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setBlogs(myJson);
      }),
      [];
  });

  return (
    <div className="py-40 p-9">
      <div className="">
        <img src={data.image} alt="" className="w-full rounded" />
      </div>
      <h3
        className="mt-4 mb-2 text-black font-bold hover:text-blue-700 cursor-pointer"
        id="name"
      >
        {data.title}
      </h3>
      <p className="mb-2 text-sm text-gray-500">
        <FaUser className="inline-flex items-center mr-2"></FaUser>
        {data.author}
      </p>
      <p className="text-sm text-gray-700">Published: {data.mail}</p>
      <p className="text-sm text-gray-500">
        <FaClock className="inline-flex items-center mr-2"></FaClock>
        {data.time}
      </p>
      <p className="text-sm text-gray-500 mt-5">{data[0].content} </p>
    </div>
  );
};

export default SingleBlog;
