import React, { useState, useCallback } from "react";

import "./App.css";
import DemoOutput from "./components/demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App running");

  const toggle = useCallback(
    (e) => {
      if (allowToggle) {
        setShowP((prevShow) => !prevShow);
      }
    },
    [allowToggle]
  );

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggle}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
