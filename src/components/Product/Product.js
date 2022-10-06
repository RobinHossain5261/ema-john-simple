import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratting:{ratings} star</small></p>
            <button onClick={() => props.handalarAddToCart(props.product)} className='cart-btn' >
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;