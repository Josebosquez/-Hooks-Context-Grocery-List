import React, {useState, useEffect} from 'react'
import { Header, Lists, Inputs } from "./components"
import { GroceryInputContext, GroceryListContext } from './context/context';
import Axios from './utils/Axios';

function App() {
  const [groceryArray, setGroceryArray] = useState([]);

  // function handleOnSubmit(e) {
  //   e.preventDefault()
  // }

  // async function handleOnClick() {
  //   try {
  //     let result = await Axios.post('/grocery/create-grocery', { grocery: inputValue })
  //     console.log(result)

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  // async function getAllGroceries(){
  //   try {
  //     let result = await Axios.get('/get-all-groceries')
  //     setGroceryArray(result.grocery)


  //     console.log(result)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  // useEffect(() => {
  //   getAllGroceries()
  // }, [])

  // function onChange(e) {
  //   setInputValue(e)
  //   console.log(inputValue)
  // }
  
  return (
    <div>
      <Header />
      <GroceryInputContext.Provider>
          <Inputs />
      </GroceryInputContext.Provider>

      <GroceryListContext.Provider>
        <Lists />
      </GroceryListContext.Provider>
    </div>
  )
}

export default App