import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
const { all_product, cartItem, removeFromCart, getTotalCartAmount } = useContext(ShopContext)

const totalAmount = getTotalCartAmount()

    return (
        <div className='cartitems'>
        {/* Empty Cart Message */}
        {totalAmount === 0 ? (
            <div className="cartitems-empty">
            <h2>Your cart is empty 🛒</h2>
            <p>Start shopping to add items to your cart.</p>
            </div>
        ) : (
            <>
            {/* Cart Header */}
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {/* Cart Items */}
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                return (
                    <div key={e.id} className="cartitems-format cartitem-format-main">
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                    <p>${e.new_price * cartItem[e.id]}</p>
                    <img
                        className='cartitems-remove-icon'
                        src={remove_icon}
                        onClick={() => removeFromCart(e.id)}
                        alt="remove"
                    />
                    </div>
                )
                }
                return null
            })}

            {/* Cart Totals */}
            <div className="cartitems-down">
                <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-items">
                    <p>Subtotal</p>
                    <p>${totalAmount}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-items">
                    <p>Shipping fee</p>
                    <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-items">
                    <h3>Total</h3>
                    <h3>${totalAmount}</h3>
                    </div>
                </div>
                <button disabled={totalAmount === 0}>PROCEED TO CHECKOUT</button>
                </div>

                {/* Promo code box */}
                <div className="cartitems-promocode">
                <p>If you have a promo code, enter it here</p>
                <div className="cartitem-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
                </div>
            </div>
            </>
        )}
        </div>
    )
}

export default CartItems
