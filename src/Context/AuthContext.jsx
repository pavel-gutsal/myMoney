/* eslint-disable import/prefer-default-export */
import React, { createContext, useEffect, useReducer } from 'react';
import { projectAuth } from '../firebase/config';

export const AuthContext = createContext();

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true };

    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    console.log('rerender');
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
    });
    // unsub();
    return () => {
      unsub();
    };
  }, []);

  console.log('AuthContext state:', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
