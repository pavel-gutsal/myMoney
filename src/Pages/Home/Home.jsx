/* eslint-disable react/self-closing-comp */
import React from 'react';
import { TransactionForm } from '../TransactionForm/TransactionForm';
import { TransactionList } from '../TransactionList/TransactionList';
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import './Home.scss';
import { DarkMode } from '../DarkMode/DarkMode';

function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('transactions', user.uid);

  return (
    <div className="Home">
      <div className="Home__container">
        <div className="Home__main">
          <DarkMode />
          {
            documents && (
              <TransactionList documents={documents} />
            )
          }
          {
            error && (
              <p>{error}</p>
            )
          }
        </div>
        <div className="Home__sideBar">
          <TransactionForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
