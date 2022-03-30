import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({cart, deleteSingleItem}) => {
    const {img, name} = cart; //destructuring
    return (
        <div className='cart'>
                <img src={img} alt="" />
                <p>{name}</p>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteSingleItem(cart)}></FontAwesomeIcon>
        </div>
    );
};

export default Cart;