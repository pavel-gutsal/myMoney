/* eslint-disable react/self-closing-comp */
import React from 'react';
import classNames from 'classnames';
import { TransactionForm } from '../TransactionForm/TransactionForm';
import { TransactionList } from '../TransactionList/TransactionList';
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import './Home.scss';
import { DarkMode } from '../../Components/DarkMode/DarkMode';
import { useDarkModeContext } from '../../hooks/useDarkModeContext';

function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('transactions', user.uid);
  const { dark } = useDarkModeContext();

  console.log(dark);
  return (
    <div className={classNames('Home', { dark })}>
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
