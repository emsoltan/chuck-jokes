import React, { useState, useEffect } from "react";
import axios from "axios";
import MyContext from "../context/MyContext"
const DataFetching = () => {
  // Declaring states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [joke, setJoke] = useState({}); //we initiate it to an empty object, this is the data that we will display

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/joke/categories")
      .then(response => {
        //   setLoading(false)
          setJoke(joke)
          setError("")
      })
      .catch(response=>{
        //   setLoading(false)
          setJoke({})
          setError("Something went wrong here, try again!")
      })
  }, []);
  return <div>
      {loading? "Loading":joke}
      {error? error: null}
  </div>;
};

export default DataFetching;
