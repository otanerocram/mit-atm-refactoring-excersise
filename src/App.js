import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [deposit, setDeposit] = useState(0);
  const [totalState, setTotalState] = useState(0);
  const [isDeposit, setIsDeposit] = useState(true);
  const [atmMode, setAtmMode] = useState("");
  const [validTransaction, setValidTransaction] = useState(false);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);

  const handleChange = (event) => {
    let moneyValue = Number(event.target.value);
    setDeposit(moneyValue);
    console.log(`handleChange ${moneyValue}`);

    if (moneyValue <= 0) {
      setValidTransaction(false);
      return;
    }

    if (!isDeposit && moneyValue >= totalState) {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }

    event.preventDefault();
  };

  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
    event.preventDefault();
  };

  const handleModeSelect = (e) => {
    console.log(e.target.value);
    setAtmMode(e.target.value);
    e.preventDefault();
  };

  useEffect(() => {
    if (atmMode === "") {
      console.log("nothing to do");
    } else if (atmMode === "Deposit") {
      console.log("a depossitar");
      setIsDeposit(true);
    } else if (atmMode === "Cash Back") {
      console.log("a retirar");
      setIsDeposit(false);
    }
  }, [atmMode]);

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <label>Select an action below to continue</label>
      <select
        onChange={(e) => handleModeSelect(e)}
        name="mode"
        id="mode-select"
      >
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">
          Deposit
        </option>
        <option id="cashback-selection" value="Cash Back">
          Cash Back
        </option>
      </select>
      {atmMode !== "" && (
        <ATMDeposit
          onChange={handleChange}
          isDeposit={isDeposit}
          isValid={validTransaction}
        ></ATMDeposit>
      )}
    </form>
  );
}

const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
  const choice = ["Deposit", "Cash Back"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input
        id="number-input"
        type="number"
        width="200"
        onChange={onChange}
      ></input>
      <input
        type="submit"
        width="200"
        value="Submit"
        id="submit-input"
        disabled={!isValid}
      ></input>
    </label>
  );
};

export default App;
