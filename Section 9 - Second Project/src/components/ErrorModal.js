import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <Card>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>Please enter a valid name and age (non-empty values)</p>
      </div>
      <footer>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
