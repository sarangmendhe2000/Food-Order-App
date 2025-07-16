import React, {lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
// import Instamart from "./component/Instamart";




const root = ReactDOM.createRoot(document.getElementById("root"));

//lazy loading
const Instamart = lazy(()=> import("./component/Instamart"));

    
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
    },
     {
      path: "/instamart",
      element:<Suspense> <Instamart/></Suspense>
    },
    {
      path: "/restaurants/:resId",
      element:<RestaurantMenu />
    }
      ],
      errorElement:<Error/>
    },
    
  ]
)

root.render(

  <RouterProvider router={appDesign}/>
);
