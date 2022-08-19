/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import { DarkModeContext } from '../Context/DarkModeContext';

export const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error('useDarkModeContext should be inside DarkModeContextProvider');
  }

  return context;
};
