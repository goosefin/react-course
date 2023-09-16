import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  // Evaluated to true or false
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailIsValid = email.includes("@");
  const emailInputIsInvalid = !emailIsValid && emailTouched;
  let formIsValid = false;

  if (enteredNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const nameInputchangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlur = () => {
    setEnteredNameTouched(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const emailInputBlur = () => {
    setEmailTouched(true);
  };

  const submitForm = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);
    setEmailTouched(true);

    if (!enteredNameIsValid || !emailIsValid) {
      return;
    }
    setEmail("");

    setEnteredName("");
    setEnteredNameTouched(false);
    setEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitForm}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputchangeHandler}
          onBlur={nameInputBlur}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={handleEmailChange}
          onBlur={emailInputBlur}
          value={email}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Enter a valid email address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

//Add new input in a div like line 42 through 54 where we get the email from a user
//Get entered value and validate it
//Replicate the red text and red shadow for the box when the input is invalid
//make sure the form can only be submitted if all of the inputs are valid
