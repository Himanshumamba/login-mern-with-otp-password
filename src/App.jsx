import React from 'react';
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Reset from './components/Reset';
import Recovery from './components/Recovery';
import NotFound from './components/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthorizeUser } from './middleware/auth';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Username>RootRouter</Username>,
  },
  {
    path: '/register',
    element: <Register>Register Router</Register>,
  },
  {
    path: '/password',
    element: <Password>password Router</Password>,
  },
  {
    path: '/profile',
    element: (
      <AuthorizeUser>
        <Profile />
      </AuthorizeUser>
    ),
  },
  {
    path: '/reset',
    element: <Reset>password Router</Reset>,
  },
  {
    path: '/recovery',
    element: <Recovery>password Router</Recovery>,
  },
  {
    path: '/*',
    element: <NotFound>password Router</NotFound>,
  },
]);
const App = () => {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
};

export default App;
