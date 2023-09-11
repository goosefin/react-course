import React from "react";
import Paragraph from "./Paragraph";

const DemoOutput = (props) => {
  console.log("Demo running");
  return <Paragraph>{props.show ? "This is new!" : ""}</Paragraph>;
};

export default React.memo(DemoOutput);
