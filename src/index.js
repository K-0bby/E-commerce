import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Shop from './pages/Shop';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "Shop",
    element: <Shop />
  },
  {
    path: "About",
    element: <About />
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

