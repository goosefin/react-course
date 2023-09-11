import React, { useState } from "react";

import "./App.css";
import DemoOutput from "./components/demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showP, setShowP] = useState(false);

  console.log("App running");

  const toggle = (e) => {
    setShowP((prevShow) => !prevShow);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggle}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
