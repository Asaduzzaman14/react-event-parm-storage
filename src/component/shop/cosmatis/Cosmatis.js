import React, { useEffect, useState } from 'react';
import Cosmait from '../../Cosmaitc/Cosmait';
import { add, getTotal } from '../calculate/Calculat';

const Cosmatis = () => {
    const [cosmatics, setCosmatics] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmatics(data))
    }, [])

    const total = getTotal(cosmatics)


    return (
        <div>
            <h1>money neded : {total}</h1>
            <h1>Welcome to cosmetis store</h1>

            {
                cosmatics.map(cosmatik => <Cosmait
                    key={cosmatik.id}
                    cosmatik={cosmatik}
                ></Cosmait>)
            }
        </div >
    );
};

export default Cosmatis;