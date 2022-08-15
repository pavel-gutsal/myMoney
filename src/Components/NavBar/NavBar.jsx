import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <>
      <nav className="navBar">
        <div className="navBar__container">
          <Link to="/" className="navBar__logo-position navBar__link">
            <h1 className="navBar__logo">myMoney</h1>
          </Link>
          <ul className="navBar__ul">
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
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
