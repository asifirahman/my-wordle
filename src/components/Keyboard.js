import React, { useEffect, useCallback, useContext } from 'react';
import Key from '../components/Key';
import { AppContext } from '../App.js';

function Keyboard() {
  const line1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const line2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const line3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  const { onSelectLetter, onEnter, onDelete } = useContext(AppContext);

  const handleKeyboard = useCallback((e) => {
    if (e.key === 'Enter') {
      onEnter();
    } else if (e.key === 'Backspace') {
      onDelete();
    } else {
      const allowedKeys = [...line1, ...line2, ...line3];
      allowedKeys.forEach((k) => {
        if (k.toLowerCase() === e.key.toLowerCase()) {
          onSelectLetter(k);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);
    return () => {
      document.removeEventListener('keydown', handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard">
      <div className="line1">
        {line1.map((key) => {
          return <Key keyValue={key} />;
        })}
      </div>
      <div className="line2">
        {line2.map((key) => {
          return <Key keyValue={key} />;
        })}
      </div>
      <div className="line3">
        <Key keyValue="ENTER" bigKey />
        {line3.map((key) => {
          return <Key keyValue={key} />;
        })}
        <Key keyValue="DELETE" bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
