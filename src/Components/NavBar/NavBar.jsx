import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import './NavBar.scss';
import { useAuthContext } from '../../hooks/useAuthContext';

function NavBar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <>
      <nav className="navBar">
        <div className="navBar__container">
          <Link to="/" className="navBar__logo-position navBar__link">
            <h1 className="navBar__logo">myMoney</h1>
          </Link>
          <ul className="navBar__ul">
            {
              !user
                ? (
                  <>
                    <li className="navBar__li">
                      <Link to="/login" className="navBar__link">
                        <h1 className="navBar__header">Login</h1>
                      </Link>

                    </li>
                    <li>
                      <Link to="/signup" className="navBar__link">
                        <h1 className="navBar__header">Signup</h1>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <h2>{`Hello, ${user.displayName}`}</h2>
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </button>
                  </>
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
