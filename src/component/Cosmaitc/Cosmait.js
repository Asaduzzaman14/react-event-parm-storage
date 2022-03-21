import React from 'react';
import '../Cosmaitc/Cosmaitc.css'


const Cosmait = (props) => {
    const { id, name, price } = props.cosmatik

    const addToCart = (id) => {
        console.log('product added', id);
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