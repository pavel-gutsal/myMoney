import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import classNames from 'classnames';
import { useDarkModeContext } from '../../hooks/useDarkModeContext';
import { useLogin } from '../../hooks/useLogin';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending } = useLogin();
  const { dark } = useDarkModeContext();

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
    <div className={classNames('login', { dark })}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
        className={classNames('login__form', 'login__form-position', { dark })}
      >
        <h1 className={classNames('login__header', { dark })}>Login</h1>
        <div className="login__input-position">
          <label
            htmlFor="loginImail"
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
            id="loginImail"
            required
          />
        </div>
        <div className="login__input-position">
          <label
            htmlFor="loginPassword"
            className={classNames('login__label', { dark })}
          >
            password:
          </label>
          <input
            type="password"
            className={classNames('login__input', { dark })}
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
