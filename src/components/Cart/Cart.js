import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, clearCart }) => {
    // console.log(cart)
    let total = 0;
    let shipping = 0;


    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected iteam: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal}</h3>
            <button onClick={clearCart}>Clear Cart</button>
            <Link to='/orders'>
                <button>Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;