/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { createContext, useReducer } from 'react';

export const DarkModeContext = createContext();

const darkReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { dark: !state.dark };
    default:
      return state;
  }
};

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkReducer, { dark: false });

  return (
    <DarkModeContext.Provider value={{ ...state, dispatch }}>
      { children }
    </DarkModeContext.Provider>
  );
};
