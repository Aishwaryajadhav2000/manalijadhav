import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Certificates from './pages/Certificates.jsx';
import Body from './pages/Body.jsx';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element : <App></App>,
    children:[
      {
        path : '/cerificates',
       element : <Certificates></Certificates>
      },
      {
        path : '/',
        element : <Body></Body>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)
