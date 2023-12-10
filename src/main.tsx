import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, About } from '@pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App>
        <Home />
      </App>
    ),
  },
  {
    path: '/about',
    element: (
      <App>
        <About />
      </App>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
