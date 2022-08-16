/*eslint-disable*/

import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSignup } from '../../hooks/useSignup';
import '../Login/Login.scss';
import './Signup.scss';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const { signup, isPending, error } = useSignup();

  const submitHandler = () => {
    if (email === '' || password === '' || userName === '') {
      return;
    }

    signup(email, password, userName);

    setEmail('');
    setPassword('');
    setUserName('');
  };

  return (
    <div className="login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
        className="login__form"
      >
        <h1 className="login__header">Signup</h1>
        <div className="login__input-position">
          <label htmlFor="signupImail" className="login__label">
            email:
          </label>
          <input
            type="email"
            className="login__input"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            id="signupImail"
            required
          />
        </div>
        <div className="login__input-position">
          <label htmlFor="signupPassword" className="login__label">
            password:
          </label>
          <input
            type="password"
            className="login__input"
            id="signupPassword"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />
        </div>
        <div className="login__input-position">
          <label htmlFor="signupName" className="login__label">
            user name:
          </label>
          <input
            type="text"
            className="login__input"
            id="signupName"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
            required
          />
        </div>
        <div className="login__btn-position">
          {!isPending && <button type="submit" className="login__btn">Signup</button>}
          {
            isPending && (
              <button type="submit" className="login__btn login__btn-noHover" disabled>
                <ClipLoader color="rgb(49, 210, 154)" loading={isPending} size={25} />
              </button>
            )
          }
          {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default Signup;
