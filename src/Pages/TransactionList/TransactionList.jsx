/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useFireStore } from '../../hooks/useFireStore';
import './TransactionList.scss';

export const TransactionList = ({ documents }) => {
  const { deleteDocument } = useFireStore('transactions');

  return (
    <div className="money">
      {
        documents.map((el) => {
          console.log(el);
          return (
            <div className="money__item" key={el.id}>
              <p className="money__name">{el.name}</p>
              <p className="money__amount">{`$ ${el.amount}`}</p>
              <button
                type="button"
                className="money__close"
                onClick={() => {
                  deleteDocument(el.id);
                }}
              >
                <img src="./svgs/close-btn.svg" alt="close" className="money__btnImage" />
              </button>
            </div>
          );
        })
      }
    </div>
  );
};
