import React from "react";
import "./App.css";
import MyProvider from "./context/MyProvider";
import Header from "./components/Header"
import Section from "./components/Section"
import DataFetching from "./components/DataFetching"
const App = () => {
  return (
    <MyProvider>
      <main>
        <h1>Welcome to React</h1>
        <Header/>
        <DataFetching/>
        <Section/>
      </main>
    </MyProvider>
  );
};

export default App;
