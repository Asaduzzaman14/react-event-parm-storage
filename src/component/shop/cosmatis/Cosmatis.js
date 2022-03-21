import React, { useEffect, useState } from 'react';
import Cosmait from '../../Cosmaitc/Cosmait';
// import { add } from '../calculate/Calculat';

const Cosmatis = () => {
    const [cosmtics, setCosmatics] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmatics(data))
    }, [])

    return (
        <div>
            <h1>Welcome to cosmetis store</h1>
            {/* <p>Total {total}</p> */}
            {
                cosmtics.map(cosmatik => <Cosmait key={cosmatik.id} cosmatik={cosmatik}></Cosmait>)
            }
        </div >
    );
};

export default Cosmatis;