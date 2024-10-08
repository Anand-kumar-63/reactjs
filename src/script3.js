import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/contact";
import About from "./components/about";
import Error from "./components/Error";
import Services from "./components/services";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Restaurantmenu from "./components/menu";

const root = ReactDOM.createRoot(document.getElementById("root"));
// functional Component of APP
const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
// we can have multiple parents and childrens and they will route according to thier path
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/", 
        element: <Body />,
      },
      {
        path:"/services",
        element: <Services />
      },
      {
        path: "/about", 
        element: <About />,
      },
      {
        path: "/Contact", 
        element: <Contact />,
      },
      {
        path: "/reastaurants/:resID",
        element: <Restaurantmenu />
      },
    ],
    errorElement: <Error />,
  },
 
]);
// Rendering everything inside root
root.render(<RouterProvider router={approuter} />);