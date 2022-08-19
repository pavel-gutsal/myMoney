/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import classNames from 'classnames';
import { useFireStore } from '../../hooks/useFireStore';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useDarkModeContext } from '../../hooks/useDarkModeContext';
import './TransactionForm.scss';

export const TransactionForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  // eslint-disable-next-line no-unused-vars
  const { addDocument } = useFireStore('transactions');
  const { user } = useAuthContext();
  const { dark } = useDarkModeContext();

  const submitHandle = (e) => {
    e.preventDefault();
    if (name === '' || amount === '') {
      return;
    }

    addDocument({
      uid: user.uid,
      name,
      amount,
    });

    setName('');
    setAmount('');
  };

  return (
    <>
      <h1 className="form__header">Add a transaction</h1>
      <form
        onSubmit={(e) => { submitHandle(e); }}
        className={classNames('form', { dark })}
      >
        <div className="form__inputUnit">
          <label
            className="form__label"
            htmlFor="input-transaction-Name"
          >
            Transaction name:
          </label>
          <input
            type="text"
            className={classNames('form__input', { dark })}
            id="input-transaction-Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>

        <div className="form__inputUnit">
          <label
            className="form__label"
            htmlFor="input-transaction-Amount"
          >
            Amount ($):
          </label>
          <input
            type="number"
            step="any"
            className={classNames('form__input', { dark })}
            id="input-transaction-Amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            value={amount}
          />
        </div>
        <button
          className="form__submitBtn"
          type="submit"
        >
          Add Transaction
        </button>
      </form>
    </>
  );
};
