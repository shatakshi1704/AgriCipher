import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext"; // ✅ AuthContext wrapper added
import PrivateRoute from "./Components/privaterouter"; // ✅ Ensure this file exists and is correctly implemented
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from './Pages/Home';
import Stories from './Pages/Stories';
import Gifts from './Pages/Gifts';
import GiftCards from './Pages/GiftCards';
import Support from './Components/Support';
import GetInvolved from './Components/GetInvolved';
import Cart from './Pages/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));

// ✅ Define all routes with AuthProvider wrapping them
const allRoutes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: 'stories', element: <Stories /> },
  { path: 'gifts', element: <Gifts /> },
  { path: 'gifts/:id', element: <GiftCards /> },
  { path: 'login', element: <Login /> },
  { path: 'register', element: <Register /> },
  { path: 'support', element: <Support /> },
  { path: 'get-involved', element: <GetInvolved /> },
  {path:'cart', element:<Cart></Cart>},
]);

root.render(
  <React.StrictMode>
    <AuthProvider>  {/* ✅ Now all components have access to AuthContext */}
      <RouterProvider router={allRoutes} />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
