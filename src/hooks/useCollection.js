/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

export const useCollection = (collection, userId) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    if (userId) {
      ref = ref.where('uid', '==', userId);
    }

    ref = ref.orderBy('createdAt', 'desc');

    const unsubscribe = ref.onSnapshot((snapshot) => {
      const results = [];
      snapshot.docs.forEach((doc) => {
        console.log(doc);
        results.push({ ...doc.data(), id: doc.id });
      });
      // update state
      setDocuments(results);
      setError(null);
    }, (err) => {
      console.log(err);
      setError('could not fetch the data');
    });

    return () => unsubscribe();
  }, [collection, userId]);

  return { documents, error };
};
