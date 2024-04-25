import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import AddCoffee from './component/AddCoffee';
import UpdateCoffee from './component/UpdateCoffee';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
  {
    path: "/addCoffee",
    element:<AddCoffee></AddCoffee>,
  },
  {
    path: "/UpdataCoffee",
    element:<UpdateCoffee></UpdateCoffee>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
