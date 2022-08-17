/* eslint-disable import/prefer-default-export */

import React, { useState, useRef, useEffect } from 'react';
import { useLogout } from '../../hooks/useLogout';
import './Logout.scss';

// eslint-disable-next-line react/prop-types
export const Logout = ({ user }) => {
  const [modal, setModal] = useState(false);
  const { logout } = useLogout();
  const modalRef = useRef(null);

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
          <div className="Logout__popup">
            <button
              type="button"
              className="Logout__logout"
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
