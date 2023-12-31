import React, { useContext } from 'react';
import { AppContext } from '../App.js';

function Key({ keyValue, bigKey }) {
  const { currentAttempt, onSelectLetter, onEnter, onDelete } =
    useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === 'ENTER') {
      onEnter();
    } else if (keyValue === 'DELETE') {
      onDelete();
    } else {
      onSelectLetter(keyValue);
    }
    console.log('currentAttempt', currentAttempt);
  };

  return (
    <div className="key" id={bigKey && 'big'} onClick={selectLetter}>
      {keyValue}
    </div>
  );
}
export default Key;
