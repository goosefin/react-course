const Concept = (props) => {
  return (
    <li className="concept">
      <img src={props.src} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
};

export default Concept;
