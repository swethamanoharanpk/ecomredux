import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Product from './pages/Product'
import Order from './pages/Order'
import Cart from './pages/Cart'

function App() {
  const abc = createBrowserRouter([
    {path:'/',
      element:<Product/>
    },
    {path:'/order',
      element:<Order/>
    },
    {path:'/cart',
      element:<Cart/>
    }
  ])
  return (
    <div>
    <RouterProvider router={abc}></RouterProvider>
    </div>
  )
}

export default App