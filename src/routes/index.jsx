import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../page/About';
import Contact from '../page/Contact';
import Login from '../page/Login';
import Register from '../page/Register';
import AdminLayout from '../components/layout/AdminLayout';
import AddService from '../page/AddService';
import Home from '../page/Home';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AddService />,
      },
    ],
  },
]);

export default routes;
