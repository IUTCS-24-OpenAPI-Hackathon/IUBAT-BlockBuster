import Banner from "../Components/Banner";
import Gps from "./Gps";
import NearByPlaces from "./NearByPlaces";
import Search from "./Search";

const Home = () => {
  return (
    <div className="text-center">
       <Banner></Banner>
      <br></br>
      <Gps></Gps> <br /> <br />
      <Search></Search>
      <NearByPlaces />
    </div>
  );
};

export default Home;
