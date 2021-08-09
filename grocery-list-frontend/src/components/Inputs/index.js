import React, { useState } from 'react'
import Sorting from '../Lists/sorting/sorting';

function Inputs() {
    const [inputValue, setInputValue] = useState('')

    function handleOnSubmit(e) {
        e.preventDefault();
        console.log('en')

    }
    
    function onChange(e) {
        setInputValue(e)
        console.log(inputValue)
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input onChange={(e) => { onChange(e.target.value) }} />
                <button>Enter</button>
            </form>
            <hr />
            <Sorting />
        </div>
    )
}

export default Inputs
