import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"

import logo from "../Assets/logo_personal.svg"
import cart_icon from "../Assets/cart_icon.png"

export default function Navbar() {

    const [menu, setMenu] = useState("shop")
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="logo"/>
                <p>FAB TOWN</p>
            </div>
            <ul className='nav-menu'>
                <Link to="/">
                    <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
                </Link>
                <Link to="/mens">
                    <li onClick={()=>{setMenu("men")}}>Men{menu==="men"?<hr/>:<></>}</li>
                </Link>
                <Link to="/womens">
                    <li onClick={()=>{setMenu("women")}}>Women{menu==="women"?<hr/>:<></>}</li>
                </Link>
                <Link to="/kids">
                    <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
                </Link>
            </ul>
            <div className='nav-login-cart'>
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="cart icon"/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        
        </div>
    )
}


