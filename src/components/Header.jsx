import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import chucky from "../assets/chucky.jpg"

const Header = () => {
  const context = useContext(MyContext);
  const { categories,select,setSelect } = context;

  return (
    <div className="header">
      <img
        src={chucky}
        alt="chuck"
      />
      <label>Choose A Category,Punk! </label>
      <select onChange={(e) => setSelect(e.target.value)} value={select}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Header;
