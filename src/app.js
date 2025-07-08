import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById("root"));

    
const AppDesign = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

const appDesign = createBrowserRouter(
  [
    {
      path: "/",
      element:<AppDesign/>,
      children: [
        {
          path: "/",
          element: <Body/>
        },
        {
      path: "/about",
      element:<About/>
    },
    {
      path: "/contact",
      element:<Contact/>
    }
      ],
      errorElement:<Error/>
    },
    
  ]
)

root.render(

  <RouterProvider router={appDesign}/>
);
