/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import classNames from 'classnames';
import { useFireStore } from '../../hooks/useFireStore';
import { useDarkModeContext } from '../../hooks/useDarkModeContext';
import './TransactionList.scss';

export const TransactionList = ({ documents }) => {
  const { deleteDocument } = useFireStore('transactions');
  const { dark } = useDarkModeContext();

  return (
    <div className="money">
      {
        documents.map((el) => {
          return (
            <div
              className={classNames('money__item', { dark })}
              key={el.id}
            >
              <p
                className={classNames('money__name', { dark })}
              >
                {el.name}
              </p>
              <p
                className={classNames('money__amount', { dark })}
              >
                {`$ ${el.amount}`}
              </p>
              <button
                type="button"
                className={classNames('money__close', { dark })}
                onClick={() => {
                  deleteDocument(el.id);
                }}
              >
                {
                  dark
                    ? (
                      <img src="./svgs/close-btn-white.svg" alt="close" className="money__btnImage" />
                    ) : (
                      <img src="./svgs/close-btn.svg" alt="close" className="money__btnImage" />
                    )
                }
              </button>
            </div>
          );
        })
      }
    </div>
  );
};
