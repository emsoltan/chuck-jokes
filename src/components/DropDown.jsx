import React, {useReducer,useEffect,useContext} from 'react'
import MyContext from "../context/MyContext"
import DataFetching from "./DataFetching"
const DropDown = (category) => {
    const context = useContext(MyContext)

    return (
      <div>
        <form type="text">
          <select name="name">
            <option value={category}>Select Category</option>
           
          </select>
        </form>
      </div>
    );
}

export default DropDown
