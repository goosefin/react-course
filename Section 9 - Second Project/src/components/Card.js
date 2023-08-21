const Card = (props) => {
  return (
    <div className={`card input ${props.className}`}>{props.children}</div>
  );
};

export default Card;
