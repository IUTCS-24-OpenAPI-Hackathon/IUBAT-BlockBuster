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
     
      
    }
      
  ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
