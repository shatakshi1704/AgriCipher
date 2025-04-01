import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext"; // ✅ AuthContext wrapper added
import Home from './Pages/Home';
import Stories from './Pages/Stories';
import Gifts from './Pages/Gifts';
import GiftCards from './Pages/GiftCards';
import Support from './Components/Support';
import GetInvolved from './Components/GetInvolved';
import Cart from './Pages/Cart';
import BuySell from './Components/BuySell'; // Make sure this is imported if you have it
import SellPage from './Components/SellPage'; // Similarly, import your SellPage if needed
import BuyPage from './Components/BuyPage'

const root = ReactDOM.createRoot(document.getElementById('root'));

// ✅ Define all routes with AuthProvider wrapping them
const allRoutes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: 'stories', element: <Stories /> },
  { path: 'gifts', element: <Gifts /> },
  { path: 'gifts/:id', element: <GiftCards /> },
  { path: 'support', element: <Support /> },
  { path: 'get-involved', element: <GetInvolved /> },
  { path: 'cart', element: <Cart /> },
  
  // New routes added
  { path: 'buy-sell', element: <BuySell /> },  // Marketplace page for Buy/Sell
  { path: 'sell', element: <SellPage /> },  
  { path: 'buy', element: <BuyPage /> },   // Sell page for listing crops
  
]);

root.render(
  <React.StrictMode>
    <AuthProvider>  {/* ✅ Now all components have access to AuthContext */}
      <RouterProvider router={allRoutes} />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
