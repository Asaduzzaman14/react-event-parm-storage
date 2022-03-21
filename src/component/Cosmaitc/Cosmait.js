import React from 'react';
import '../Cosmaitc/Cosmaitc.css'
import { addToDb } from '../shop/Fakedb';


const Cosmait = (props) => {
    const { id, name, price } = props.cosmatik

    const addToCart = (id) => {

        addToDb(id)
    }

    return (
        <div className='cosmatic'>
            <h2>id:{id}</h2>
            <h3>Nmae : {name}</h3>
            <h4>Price: {price}</h4>
            <button onClick={() => { addToCart(id) }}> Add  to Cart</button>
        </div>
    );
};

export default Cosmait;