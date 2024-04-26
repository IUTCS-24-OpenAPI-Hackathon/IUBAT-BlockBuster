import React from "react";
import Gps from "./Gps";
import Search from "./Search";

const Home = () => {
  return (
    <div className="text-center">
      Home
      <Gps></Gps> <br /> <br />
      <Search></Search>
    </div>
  );
};

export default Home;
