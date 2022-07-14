import React, {useState} from 'react';

const Fib = () => { 
    // every time button clicked, fibonacci number goes up  
    const [count, setCount] = useState(1);
    // const [num, setNum] = useState(0);
    const [fib, setFib] = useState(0);

    const counter = () => {
        
        setCount(count+1);
        
        console.log(sequence(count));
        setFib(sequence(count));
    }
    const sequence = num => {
        console.log(num);
        
        if (num === 0 || num === 1) {
            return num;
        }
        else {
            
            return sequence(num-1) + sequence(num-2);
        }
    };

    return (
      <div>
          <h2> <u>Fibonacci</u></h2>
          <p> {fib} </p>
          <button onClick = {counter}>Next in fibonacci sequence</button>
      </div>
    );
  }
  export default Fib;
  
