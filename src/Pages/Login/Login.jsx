import React, { useState } from 'react';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = () => {
    if (email === '' || password === '') {
      // eslint-disable-next-line no-useless-return
      return;
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
        className="login__form login__form-position"
      >
        <h1 className="login__header">Login</h1>
        <div className="login__input-position">
          <label htmlFor="loginImail" className="login__label">
            email:
          </label>
          <input
            type="email"
            className="login__input"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            id="loginImail"
            required
          />
        </div>
        <div className="login__input-position">
          <label htmlFor="loginPassword" className="login__label">
            password:
          </label>
          <input
            type="password"
            className="login__input"
            id="loginPassword"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />
        </div>
        <div className="login__btn-position">
          <button type="submit" className="login__btn">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
