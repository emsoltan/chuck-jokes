import React, { useContext } from "react";
import MyContext from "../context/MyContext";

const Section = () => {
  const context = useContext(MyContext);
  const { joke } = context;
  return (
    <div class="section">
      <h3>{joke}</h3>
    </div>
  );
};

export default Section;
