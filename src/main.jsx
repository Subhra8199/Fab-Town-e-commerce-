// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ShopCategory from './pages/ShopCategory.jsx'
import Product from './pages/Product.jsx'
import LoginSignup from './pages/LoginSignup.jsx'
import Cart from './pages/Cart.jsx'
import Shop from './pages/Shop.jsx'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

const router = createBrowserRouter([
  {
    path:"/", 
    element:<App/>,
    children:[
      { path:"/", element:<Shop/>},
      { path:"/mens", element:<ShopCategory category ="mens" banner={men_banner}/>},
      { path:"/womens", element:<ShopCategory category ="womens" banner={women_banner}/>},
      { path:"/kids", element:<ShopCategory category ="kids" banner={kid_banner}/>},
      { path:"/product", element:<Product/>},
      { path:"/product/:id", element:<Product/>},
      {path:"/cart", element:<Cart/>},
      {path:"/login", element:<LoginSignup/>}
    ]}
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router}/>
  // </StrictMode>,
)
