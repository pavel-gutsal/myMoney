/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';

export const TransactionForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const submitHandle = (e) => {
    e.preventDefault();
    if (name === '' || amount === '') {
      return;
    }

    const newTransaction = {
      name,
      amount,
    };

    console.log(newTransaction);
  };

  return (
    <>
      <h1 className="Home__header">Add a transaction</h1>
      <form
        onSubmit={(e) => { submitHandle(e); }}
        className="Home__form"
      >
        <div className="Home__inputUnit">
          <label
            className="Home__label"
            htmlFor="input-transaction-Name"
          >
            Transaction name:
          </label>
          <input
            type="text"
            className="Home__input"
            id="input-transaction-Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>

        <div className="Home__inputUnit">
          <label
            className="Home__label"
            htmlFor="input-transaction-Amount"
          >
            Amount ($):
          </label>
          <input
            type="number"
            className="Home__input"
            id="input-transaction-Amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            value={amount}
          />
        </div>
        <button
          className="Home__submitBtn"
          type="submit"
        >
          Add Transaction
        </button>
      </form>
    </>
  );
};
