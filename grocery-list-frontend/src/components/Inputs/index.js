import React, { useState } from 'react'
import Sorting from '../Lists/sorting/sorting';
import Axios from '../../utils/Axios';


function Inputs() {
    const [inputValue, setInputValue] = useState('')
    const [groceryArray, setGroceryArray] = useState([])

    function handleOnSubmit(e){
        e.preventDefault()
    }

    async function handleOnClick() {
        try {
            let result = await Axios.post('/grocery/create-grocery', { grocery: inputValue })
        console.log(result)

        } catch (e) {
            console.log(e)
        }
    }

    function onChange(e) {
        setInputValue(e)
        console.log(inputValue)
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input onChange={(e) => { onChange(e.target.value) }} />
                <button type="submit" onClick={() => handleOnClick()}>Enter</button>
                <hr />
                <Sorting />
            </form>
        </div>
    )
}

export default Inputs
