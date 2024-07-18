import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import ShopProduct from './pages/ShopProducts';

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
  {
    path: "Contact",
    element: <Contact />
  },
  {
    path: "Product/:id",
    element: <Product />
  },
  {
    path: "ShopProduct/:id",
    element: <ShopProduct />
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

