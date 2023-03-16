import React, { useState } from 'react'


const Sum = () => {

    const [number, setNumber] = useState(0);
    const [addition, setAddition] = useState(0);

    const updatenumber = (e) => {
        const num = e.target.value;
        setNumber(num);
        updateSum(num);
    }

    const updateSum = (num) => {
        setAddition(parseInt(addition) + parseInt(num))
    }

    return (
        <div className='container'>
            <h1>Sum Calculator</h1>


            <div className='inputbox'>
                <input type={"number"} value={number} onChange={updatenumber} ></input>
            </div>
            <p>Sum: {addition} </p>
        </div>
    )
}

export default Sum
