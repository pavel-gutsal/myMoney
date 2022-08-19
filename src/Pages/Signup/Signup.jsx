/*eslint-disable*/
import React, { useState } from 'react';
import classNames from 'classnames';
import { useDarkModeContext } from '../../hooks/useDarkModeContext';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSignup } from '../../hooks/useSignup';
import '../Login/Login.scss';
import './Signup.scss';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const { signup, isPending, error } = useSignup();
  const { dark } = useDarkModeContext();

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
    <div className={classNames('login', { dark })}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
        className={classNames('login__form', { dark })}
      >
        <h1 className={classNames('login__header', { dark })}>Signup</h1>
        <div className="login__input-position">
          <label
            htmlFor="signupImail"
            className={classNames('login__label', { dark })}
          >
            email:
          </label>
          <input
            type="email"
            className={classNames('login__input', { dark })}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            id="signupImail"
            required
          />
        </div>
        <div className="login__input-position">
          <label
            htmlFor="signupPassword"
            className={classNames('login__label', { dark })}
          >
            password:
          </label>
          <input
            type="password"
            className={classNames('login__input', { dark })}
            id="signupPassword"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />
        </div>
        <div className="login__input-position">
          <label
            htmlFor="signupName"
            className={classNames('login__label', { dark })}
          >
            user name:
          </label>
          <input
            type="text"
            className={classNames('login__input', { dark })}
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

export default Signup;
