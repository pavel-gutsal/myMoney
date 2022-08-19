/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import './DarkMode.scss';
import { useDarkModeContext } from '../../hooks/useDarkModeContext';

export const DarkMode = () => {
  const { dark, dispatch } = useDarkModeContext();
  const [darkMode, setDarkMode] = useState(dark);

  return (
    <div className="darkMode">
      <button
        type="button"
        className={`darkMode__btn ${darkMode && 'darkMode__true'}`}
        onClick={() => {
          setDarkMode((prev) => !prev);
          dispatch({ type: 'TOGGLE' });
        }}
      >
        <div className={`darkMode__circle ${darkMode && 'darkMode__true'} `} />
      </button>
    </div>
  );
};
