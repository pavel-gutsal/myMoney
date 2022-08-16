/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setIsPending(true);
    setError(null);

    try {
      await projectAuth.signOut();

      dispatch({ type: 'LOGOUT' });

      // update state
      if (!isCancelled) {
        setIsPending(false);
      }
    } catch (err) {
      if (!isCancelled) {
        console.warn(err.message);
        setIsPending(false);
        setError(err.message);
      }
    }
  };

  useEffect(() => () => setIsCancelled(true), []);

  return { logout, error, isPending };
};
