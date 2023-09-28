import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Components/Home/Home.jsx';
import Main from './layout/Main.jsx';
import Login from './Components/Login/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={router}></RouterProvider>
  </React.StrictMode>,
)
