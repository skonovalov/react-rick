import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from '../layouts/Default';
import LoginLayout from '../layouts/Login';
import ErrorPage from '../pages/ErrorPage';

import Characters from '../pages/Characters';
import Character from '../pages/Character';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'characters',
        element: <Characters />,
      },
      {
        path: 'characters/:id',
        element: <Character />
      }
    ],
  },
  {
    path: '/login',
    element: <LoginLayout />,
  },
]);

export default router;