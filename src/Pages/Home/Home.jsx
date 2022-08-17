/* eslint-disable react/self-closing-comp */
import React from 'react';
import { TransactionForm } from '../TransactionForm/TransactionForm';
import './Home.scss';

function Home() {
  return (
    <div className="Home">
      <div className="Home__container">
        <div className="Home__main"></div>
        <div className="Home__sideBar">
          <TransactionForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
