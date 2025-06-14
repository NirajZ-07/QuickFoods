import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
// import Grocery from "./components/Grocery";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


//first react App
// Food Ordering App

/*

Header
    -Logo
    -Nav Item

Body
    -Search
    -RestaurantsContainer
        -RestaurantCard
            -Img
            -Name of Res, Star Rating, cuisine, etc

Footer
    -Copyright
    -Links
    -Address
    -Contact
*/

// Chunking 
// Code Splitting
// Dynamic Building
// Lazy Loading
// on demand loading
// dynamic import

const Grocery = React.lazy(() => import("./components/Grocery"));


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />

    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children : [
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/about",
        element : <About />,
      },
      {
        path : "/contact",
        element : <Contact />,
      },
      {
        path : "/grocery",
        element : <Suspense fallback=<h1>Loading...</h1>> <Grocery /></Suspense>,
      },
      {
        path : "/Restaurants/:resId",
        element : <RestaurantMenu />,
      },
    ],
    errorElement : <Error />,
  },
  
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }
}
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
