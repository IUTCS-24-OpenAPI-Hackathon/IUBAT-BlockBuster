import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Blogs from './Pages/Blogs.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import NearByPlaces from './Pages/NearByPlaces.jsx';
import Placedetails from './Pages/Placedetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [{

        path: "/",
        element: <Home></Home>
    },
    {

      path:"/Blogs",
      element: <Blogs></Blogs>
    }
    ,
    {

      path:"/About",
      element: <About></About>
    }
    ,
    {

      path:"/Contact",
      element: <Contact></Contact>
    },
    {
      path:"/NearPlaces",
      element:<NearByPlaces></NearByPlaces>,
      loader:()=>fetch(`fakedb.json`)

      
    },
    {
      path:"/NearPlaces/:id",
      element:<Placedetails></Placedetails>
      

      
    }
      
  ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
