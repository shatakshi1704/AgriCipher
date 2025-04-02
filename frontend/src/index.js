import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext"; 
import Home from './Pages/Home';
import Stories from './Pages/Stories';
import Gifts from './Pages/Gifts';
import GiftCards from './Pages/GiftCards';
import Support from './Components/Support';
import GetInvolved from './Components/GetInvolved';
import Cart from './Pages/Cart';
import BuySell from './Components/BuySell';
import SellPage from './Components/SellPage'; 
import BuyPage from './Components/BuyPage'

const root = ReactDOM.createRoot(document.getElementById('root'));

const allRoutes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: 'stories', element: <Stories /> },
  { path: 'gifts', element: <Gifts /> },
  { path: 'gifts/:id', element: <GiftCards /> },
  { path: 'support', element: <Support /> },
  { path: 'get-involved', element: <GetInvolved /> },
  { path: 'cart', element: <Cart /> },
  
  { path: 'buy-sell', element: <BuySell /> },  
  { path: 'sell', element: <SellPage /> },  
  { path: 'buy', element: <BuyPage /> },   
  
]);

root.render(
  <React.StrictMode>
    <AuthProvider>  
      <RouterProvider router={allRoutes} />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
