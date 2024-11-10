import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/contact";
import About from "./components/About";
import Error from "./components/Error";
import Services from "./components/services";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Restaurantmenu from "./components/menu";

// import Grocery from './components/Grocery'

// * Modularity is also known as:
// * Chunking---making seperate bundle for big components so that when website loads that component doesnt load until it called it decreases the loading time of the website it optimises the website
// * or Code Splitting
// * or Dynamic Bundling
// * Lazy Loading--its a component imported from react see when grocery is clicked its component or bulndle takes 12ms to load but react is so fast when grocery is clicked react thinks there is no data so react gives error so to stop this error lazy component is used
// * or On-Demand Loading
// * Dynamic Import

const Grocery = lazy(() => import("./components/Grocery"));

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
        path: "/services",
        element: <Services />,
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
        path: "/res",
        element: <Restaurantmenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
// Rendering everything inside root
root.render(<RouterProvider router={approuter} />);
