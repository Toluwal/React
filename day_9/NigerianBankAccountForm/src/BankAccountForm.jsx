import { useState } from "react";

function BankAccountForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [bank, setBank] = useState("");
  const [type, setType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    name.length >= 3 &&
    /^[0-9]{10}$/.test(number) &&
    bank &&
    type;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) setSubmitted(true);
  };

  return (
    <div>
      <h2>Add Bank Account</h2>
      {submitted ? (
        <p>Account saved: {name}, {number}, {bank}, {type}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Account Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Account Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <select value={bank} onChange={(e) => setBank(e.target.value)}>
            <option value="">Select Bank</option>
            <option value="GTBank">GTBank</option>
            <option value="Access Bank">Access Bank</option>
            <option value="UBA">UBA</option>
            <option value="First Bank">First Bank</option>
            <option value="Zenith Bank">Zenith Bank</option>
          </select>

          <div>
            <label>
              <input
                type="radio"
                name="type"
                value="Savings"
                onChange={(e) => setType(e.target.value)}
              />
              Savings
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="Current"
                onChange={(e) => setType(e.target.value)}
              />
              Current
            </label>
          </div>

          <button type="submit" disabled={!isValid}>
            Save Account Details
          </button>
        </form>
      )}
    </div>
  );
}

export default BankAccountForm;
