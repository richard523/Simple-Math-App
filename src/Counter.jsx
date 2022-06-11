import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = ()=> {
        setCount(count + 1);
    };
    // const handleDecrement = ()=> {
    //     setCount(count - 1);
    // }


    return (
        
        <div>
            <h2><u>Counter</u></h2>
            <p>The count is: {count}</p>
            <button onClick={handleIncrement}> Increment </button>
            <button onClick={() => setCount(count-1)}> Decrement </button>
        </div>
    )
};

export default Counter;