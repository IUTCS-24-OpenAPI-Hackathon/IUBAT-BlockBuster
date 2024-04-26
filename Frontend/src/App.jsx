
import './App.css'

import { Outlet } from "react-router-dom"
import Nav from "./Components/Nav"
import Footer from './Components/footer'


function App() {


  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
