import { useState } from "react";

const Form = (props) => {
  const [userInput, setUserInput] = useState({});

  const handleChange = (input, value) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);

    // props.calculateHandler();
  };

  const handleReset = () => {};

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(e) => handleChange("current-savings", e.target.value)}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(e) =>
              handleChange("yearly-contribution", e.target.value)
            }
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(e) => handleChange("expected-return", e.target.value)}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(e) => handleChange("duration", e.target.value)}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={handleReset} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
