import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  //props.children allows us to place content inside of the closing and opening tags of the component.
  return <div className={classes}>{props.children}</div>;
}

export default Card;
