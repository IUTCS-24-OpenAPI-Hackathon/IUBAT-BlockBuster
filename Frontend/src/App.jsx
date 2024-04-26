import "./App.css";

import { Outlet } from "react-router-dom";
// import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      {/* <Footer /> */}
    </>
  );
}

export default App;
