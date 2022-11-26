import React, {useState} from 'react'

const useCounter = () =>{
    const [counter, setCount] = useState(0);

    const increase = () => setCount(counter + 1)
    const decrement = () => setCount(counter - 1)
    const reset = () => setCount(0)

    return{
        counter,
        decrement,
        increase,
        reset
    }
}
const ItemCount = () => {
    const {counter,decrement,increase,reset} = useCounter();
    return (
        <div>
            <div>
                <span>
                    Counter: {counter}
                </span>
            </div>
            <button onClick={decrement} className="btn btn-primary m-1">-</button>
            <button onClick={increase} className="btn btn-primary m-1">+</button>
            <button onClick={reset} className="btn btn-primary m-1">Reset</button>
        </div>
    )
}

export default ItemCount