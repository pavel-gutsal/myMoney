/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import useAuthContext from './useAuthContext';
import { projectAuth } from '../firebase/config';

export const useSignup = () => {
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

      // dispatch login actrion
      dispatch({ type: 'LOGIN', payload: res.user });

      setIsPending(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { signup, error, isPending };
};
