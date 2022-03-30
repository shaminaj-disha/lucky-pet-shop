import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const {img, name, price} = product; //destructuring
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'><p>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p></button>
        </div>
    );
};

export default Product;