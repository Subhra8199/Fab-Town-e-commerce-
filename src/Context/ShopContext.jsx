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
            return {...prev,[item]:Math.max(prev[item] - 1,0)}
            
        }
        )
    }
    const getTotalCartAmount =()=>{
        let totalAmount = 0
        for (const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount = totalAmount + itemInfo.new_price * cartItem[item]
            }
        }
        return totalAmount
    }
    const getTotalcartItems =()=>{
        let totalItem = 0
        for (const item in cartItem){
            if(cartItem[item]>0)
            {
                totalItem = totalItem + cartItem[item]
            }
        }
        return totalItem
    }
    const [cartItem,setCartItems] = useState(getDefaultCart())
    const contextValue ={all_product,cartItem,addToCart,removeFromCart,getTotalCartAmount,getTotalcartItems}

    return (
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}