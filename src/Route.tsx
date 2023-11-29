import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/organisms/Home';
import Start from './components/organisms/Start';
import About from './components/organisms/About';

const router = createBrowserRouter([
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/',
    element: <Start />,
  },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
