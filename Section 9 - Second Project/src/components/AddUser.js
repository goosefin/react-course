import { useState } from "react";
import Button from "./Button";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      age: age,
    };
    console.log(newUser);
    if (name.trim().length === 0 || age.trim().length === 0) {
      return;
    }

    if (+age < 1) {
      return;
    }
    props.handleAddUser(newUser);
    setAge("");
    setName("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input onChange={handleNameChange} value={name} type="text" />

        <label>Age (Years)</label>
        <input onChange={handleAgeChange} value={age} type="number" />

        <Button type="submit">Add User</Button>
      </form>
    </>
  );
};

export default AddUser;
