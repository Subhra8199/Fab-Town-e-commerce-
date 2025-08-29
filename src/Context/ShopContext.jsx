import React, { createContext, useState } from "react"
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null)

    const getDefaultCart = ()=>{
        let cart = {}
        for(let i=0; i<all_product.length; i++){
            cart[all_product[i].id] = 0
        }
        return cart
    }

export default function ShopContextProvider(props){
    const addToCart = (item)=>{
        
        setCartItems((prev)=>{
            return {...prev,[item]:prev[item] + 1}
        })
        console.log(cartItem)
    }
    const removeFromCart = (item)=>{
        
        setCartItems((prev)=>{
            return {...prev,[item]:prev[item] - 1}
            
        }
        )
    }
    const [cartItem,setCartItems] = useState(getDefaultCart())
    const contextValue ={all_product,cartItem,addToCart,removeFromCart}

    return (
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}