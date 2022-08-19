import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './NavBar.scss';
import classNames from 'classnames';
import { useAuthContext } from '../../hooks/useAuthContext';
import { Logout } from '../Logout/Logout';
import { useDarkModeContext } from '../../hooks/useDarkModeContext';

function NavBar() {
  const { user } = useAuthContext();
  const { dark } = useDarkModeContext();

  return (
    <>
      <nav className={classNames('navBar', { dark })}>
        <div className="navBar__container">
          <Link to="/" className="navBar__logo-position navBar__link">
            <h1 className={classNames('navBar__logo', { dark })}>myMoney</h1>
          </Link>
          <ul className="navBar__ul">
            {
              !user
                ? (
                  <>
                    <li className="navBar__li">
                      <Link to="/login" className="navBar__link">
                        <h1 className={classNames('navBar__header', { dark })}>Login</h1>
                      </Link>

                    </li>
                    <li>
                      <Link to="/signup" className="navBar__link">
                        <h1 className={classNames('navBar__header', { dark })}>Signup</h1>
                      </Link>
                    </li>
                  </>
                ) : (
                  <Logout user={user.displayName} />
                )
            }
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
