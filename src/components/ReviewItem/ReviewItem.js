import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product, handaleRemoveItem }) => {
    const { img, name, price, quentity, shipping, id } = product;
    return (
        <div className='review-item'>
            <div >
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>Quantity:{quentity}</small></p>
                    <p><small>Shipping:{shipping}</small></p>
                    <p><small>Price:{price}</small></p>

                </div>
                <div className='delete-container'>
                    <button onClick={() => handaleRemoveItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;