import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventDetails from './pages/EventDetails.jsx'
import { SearchProvider } from './context/SearchContext'
const router = createBrowserRouter([
   {
    path: "/",
    element: <App />,
  },{
    path: "/events/:eventId",
    element: <EventDetails />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  </StrictMode>,
)
