import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/organisms/Home';
import Start from './components/organisms/Start';

const router = createBrowserRouter([
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
