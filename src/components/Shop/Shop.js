import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getStoredCart, removeFromDb} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products]);
    //Add to cart
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        if(carts.length < 4){
            const exists = carts.find(product => product.id === selectedProduct.id);
            if(!exists){
                selectedProduct.quantity = 1;
                newCart = [...carts, selectedProduct];
            }
            else{
                const rest = carts.filter(product => product.id !== selectedProduct.id);
                exists.quantity = exists.quantity + 1;
                newCart = [...rest, exists];
            }
            setCart(newCart);
            addToDb(selectedProduct.id);
        }
        else{
            alert("You can only select 1 to 4 pets to add to the cart");
        }
    }
    //Random select a pet
    const randomSelection = () =>{
        if(carts.length > 0){
            const randomSelect = Math.floor(Math.random() * ((carts.length - 1) - 0 + 1) + 0);
            let newCartsValue;
            let newCartsArray = [];
            newCartsValue = carts[randomSelect];
            newCartsArray = [newCartsValue];
            setCart(newCartsArray);
        }
        else{
            alert("You have to select 1 to 4 pets to randomly choose one");
        }
    }
    //Clear cart
    const clearCartField = () =>{
        deleteShoppingCart();
        let newCart = [];
        setCart(newCart);
    }
    //delete single item
    const deleteSingleItem = (selectedProduct) => {
        let newCart = [];
        const rest = carts.filter(product => product.id !== selectedProduct.id);
        newCart = [...rest];
        setCart(newCart);
        removeFromDb(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <div className='cart-body'>
                    <h3>Selected Pets: {carts.length}</h3>
                    {
                        carts?.map(product => <Cart
                            key={product.id}
                            cart={product}
                            deleteSingleItem={deleteSingleItem}
                        ></Cart>)
                    }
                    <br />
                    <button onClick={randomSelection} className='btn-choose'><p>Choose 1 for me</p></button>
                    <br/><br/>
                    <button onClick={clearCartField} className='btn-choose-again'><p>Choose Again</p></button>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default Shop;