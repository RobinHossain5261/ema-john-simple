import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id = id);
            if (addedProduct) {
                const quentity = storedCart[id];
                addedProduct.quentity = quentity;
                saveCart.push(addedProduct);

            }
        }
        setCart(saveCart);
    }, [products])

    const handalarAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-containear'>
            <div className="product-containear">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handalarAddToCart={handalarAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-containear">
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;