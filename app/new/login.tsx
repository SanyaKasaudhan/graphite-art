import React, { useState } from 'react';

const Login = () => {
  const [name, setName] = useState('');
  const [gstin, setGstin] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [panCard, setPanCard] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          GSTIN:
          <input
            type="text"
            value={gstin}
            onChange={(e) => setGstin(e.target.value)}
            pattern="[0-9A-Za-z]{15}"
            required
          />
        </label>
        <br />
        <label>
          Bank Account:
          <input
            type="text"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
            pattern="[0-9]{9,18}"
            required
          />
        </label>
        <br />
        <label>
          PAN Card:
          <input
            type="text"
            value={panCard}
            onChange={(e) => setPanCard(e.target.value)}
            pattern="[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}"
            required
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
