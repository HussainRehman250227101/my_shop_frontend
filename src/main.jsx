import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'


import App from './App.jsx'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import store from './app/store.js'


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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
