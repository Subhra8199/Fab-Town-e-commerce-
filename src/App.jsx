import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import ShopContextProvider from "./Context/ShopContext"



export default function App() {
  return (
        <ShopContextProvider>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </ShopContextProvider>
      )
}
