import React from 'react';
import '../Cosmaitc/Cosmaitc.css'
import { addToDb, removeFromDb } from '../shop/Fakedb';


const Cosmait = (props) => {
    const { id, name, price } = props.cosmatik

    const addToCart = (id) => {

        addToDb(id)
    }
    const removeFromCart = (id) => {
        removeFromDb(id)
    }

    return (
        <div className='cosmatic'>
            <h2>id:{id}</h2>
            <h3>Nmae : {name}</h3>
            <h4>Price: {price}</h4>
            <button onClick={() => { addToCart(id) }}> Add  to Cart</button>
            <button onClick={() => { removeFromCart(id) }}> Remove</button>
        </div>
    );
};

export default Cosmait;