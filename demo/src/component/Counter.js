import React, { useState } from 'react'
import Hello from './Hello';

const CountContext = React.createContext();

const Counter = () =>{
    const [count, setcount] = useState(0);

    function increment(props){
        setcount(count + props)
    }

    function increment1(){
        increment(1)
    }

    function increment5(){
        increment(5)
    }

    function increment10(){
        increment(10)
    }

    function reset(){
        setcount(0)
    }

    return(
        <div className='text-danger'> 
            <h2>Birthday Counter</h2>
            {/* <h2>Count: {count}</h2> */}
            <button type='button' className='btn btn-primary me-3' onClick={increment1}>Increment 1</button>
            <button type='button' className='btn btn-primary me-3' onClick={increment5}>Increment 5</button>
            <button type='button' className='btn btn-primary me-3' onClick={increment10}>Increment 10</button>
            <button type='button' className='btn btn-primary me-3' onClick={reset}>Reset</button>
            <CountContext.Provider value={count}>
                <Hello name="Kietnehihi" title="sinh nhật lần thứ" count ={count}/>
            </CountContext.Provider>
        </div>
    )
}

export default Counter
