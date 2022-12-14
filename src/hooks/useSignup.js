/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(email, password);

      if (!res) {
        throw new Error('Could not complete signup');
      }

      await res.user.updateProfile({ displayName });

      dispatch({ type: 'LOGIN', payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      if (!isCancelled) {
        console.warn(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => () => setIsCancelled(true), []);

  return { signup, error, isPending };
};
