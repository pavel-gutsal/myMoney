import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useLogin } from '../../hooks/useLogin';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending } = useLogin();

  const submitHandler = () => {
    if (email === '' || password === '') {
      // eslint-disable-next-line no-useless-return
      return;
    }

    login(email, password);

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
          {!isPending
            ? (<button type="submit" className="login__btn">Login</button>)
            : (
              <button type="submit" className="login__btn login__btn-noHover" disabled>
                <ClipLoader color="rgb(49, 210, 154)" loading={isPending} size={25} />
              </button>
            )}
        </div>
        { error && (
          <div className="login__error">
            <p className="login__errorMessage">{error}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
