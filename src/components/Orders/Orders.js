import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handaleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);

    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    return (
        <div className='shop-containear'>
            <div className='orders-containear'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handaleRemoveItem={handaleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No items found.Please <Link to='/'>shop now</Link></h2>
                }
            </div>
            <div className='cart-containear'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;