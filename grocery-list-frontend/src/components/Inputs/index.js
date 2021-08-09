import React, { useState } from 'react'
import Sorting from '../Lists/sorting/sorting';

function Inputs() {
    const [inputValue, setInputValue] = useState('')

    function handleOnSubmit(e) {
        e.preventDefault();

        console.log("submit")
    }

    function onChange(e) {
        setInputValue(e)
    }

    function handleButton() {
        console.log(inputValue)
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input onChange={(e) => {onChange(e.target.value) }} />
                <button onClick={() => { handleButton() }}>Enter</button>
            </form>
            <hr/>
            <Sorting/>
        </div>
    )
}

export default Inputs
