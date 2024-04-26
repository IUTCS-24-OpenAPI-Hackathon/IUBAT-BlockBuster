import Banner from "../Components/Banner";
import Gps from "./Gps";
import Search from "./Search";

const Home = () => {
  return (
    <div className="text-center">
      Home
      <Banner></Banner>
      <br></br>
      <Gps></Gps> <br /> <br />
      <Search></Search>
    </div>
  );
};

export default Home;
