import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Home from "./components/organisms/Home";
  import Start from "./components/organisms/Start";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start />,
    },
    {
      path: "/home",
      element: <Home />,
    }
  ]);


function Route() {
    return (  
        <RouterProvider router={router} />

    );
}

export default Route;