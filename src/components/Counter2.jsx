import React, { useContext } from 'react'
import { AppContext } from '../context/Context'

function Counter2() {
    const { counter, setCounter } = useContext(AppContext)
    return (
        <div className='container'>
            <h2> Counter: {counter}</h2>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>+</button>
        </div>
    )
}

export default Counter2
