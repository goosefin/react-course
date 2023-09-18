import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const emailIsValid = email.includes("@");
  const emailInputIsInvalid = !emailIsValid && emailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const emailInputBlur = () => {
    setEmailTouched(true);
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid || !emailIsValid) {
      return;
    }

    resetNameInput();
    setEmail("");
    setEmailTouched(false);
  };

  const nameInputClasses = nameInputHasError
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
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
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
