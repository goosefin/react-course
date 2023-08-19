const formatter = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Table = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.yearlyData.map((perYear) => (
          <tr key={perYear.year}>
            <td>{perYear.year}</td>
            <td>{formatter.format(perYear.savingsEndOfYear)}</td>
            <td>{formatter.format(perYear.yearlyInterest)}</td>
            <td>
              {formatter.format(
                perYear.savingsEndOfYear -
                  props.initialInvestment -
                  perYear.yearlyContribution * perYear.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment +
                  perYear.yearlyContribution * perYear.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
