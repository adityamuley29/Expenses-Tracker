import React, { useState } from "react";
import Wrapper from "./components/UI/Wrapper";
import "./App.css";
import AddItem from "./components/UI/AddItem";
import Heading from "./components/UI/Heading";

const Initial_Data = [
  
];

function App() {
  const [item, setItem] = useState(Initial_Data);
  const addDataHandler = (respondItem) => {
    setItem((prevItem) => {
      return setItem([respondItem, ...prevItem]);
    });
  };
  return (
    <div className="App">
      <Heading/>
      <AddItem DataToArray={addDataHandler} />
      <Wrapper data={item} />
    </div>
  );
}

export default App;
