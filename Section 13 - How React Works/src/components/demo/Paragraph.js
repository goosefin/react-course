import React from "react";

const Paragraph = (props) => {
  console.log("Paragraph running");
  return <p>{props.children}</p>;
};

export default Paragraph;
