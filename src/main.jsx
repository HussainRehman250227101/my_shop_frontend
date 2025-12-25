import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'


const router = createBrowserRouter([
  {
    path:"/",
    element : <App/>,
    children:[
      {
        index : true,
        element : <HomeScreen/>
      },
      {
        path : "/product/:id",
        element : <ProductScreen/>
      }
    ] 
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
