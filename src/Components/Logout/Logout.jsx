/* eslint-disable import/prefer-default-export */

import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { useLogout } from '../../hooks/useLogout';
import { useDarkModeContext } from '../../hooks/useDarkModeContext';
import './Logout.scss';

// eslint-disable-next-line react/prop-types
export const Logout = ({ user }) => {
  const [modal, setModal] = useState(false);
  const { logout } = useLogout();
  const modalRef = useRef(null);
  const { dark } = useDarkModeContext();

  useEffect(() => {
    const handler = (event) => {
      if (!modalRef.current.contains(event.target)) {
        setModal(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <div ref={modalRef} className="Logout">
      <button
        type="button"
        className="Logout__userName"
        onClick={() => {
          setModal((prev) => !prev);
        }}
      >
        {`hello,  ${user}`}
      </button>
      {
        modal && (
          <div
            className={classNames('Logout__popup', { dark })}
          >
            <button
              type="button"
              className={classNames('Logout__logout', { dark })}
              onClick={() => {
                logout();
                setModal(false);
              }}
            >
              Logout
            </button>
          </div>
        )
      }
    </div>
  );
};
