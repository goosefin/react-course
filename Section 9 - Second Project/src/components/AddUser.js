import { useRef, useState } from "react";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import Wrapper from "./Wrapper";
import Card from "./Card";

const AddUser = (props) => {
  const nameInput = useRef();
  const ageInput = useRef();
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredAge = ageInput.current.value;
    const newUser = {
      name: enteredName,
      age: enteredAge,
    };
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.handleAddUser(newUser);
    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form className="form" onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" ref={nameInput} />

          <label>Age (Years)</label>
          <input type="number" ref={ageInput} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
