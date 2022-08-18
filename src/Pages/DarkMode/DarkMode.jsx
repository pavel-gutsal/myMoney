/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import './DarkMode.scss';

export const DarkMode = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className="darkMode">
      <button
        type="button"
        className={`darkMode__btn ${dark && 'darkMode__true'}`}
        onClick={() => {
          setDark((prev) => !prev);
        }}
      >
        <div className={`darkMode__circle ${dark && 'darkMode__true'} `} />
      </button>
    </div>
  );
};
