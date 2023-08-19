import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    console.log(yearlyData);
    setUserInput(userInput);
  };

  let yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header logo={logo} />
      <Form calculateHandler={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: "center" }}>No investment calculated yet</p>
      )}
      {userInput && (
        <Table
          initialInvestment={userInput["current-savings"]}
          yearlyData={yearlyData}
        />
      )}
    </div>
  );
};

export default App;
