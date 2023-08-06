import React, { useState, createContext } from 'react';
import './style.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefaultValue } from './utils/boardDefaultVal';

export const AppContext = createContext();

export default function App() {
  const [wordsHolder, setWordsHolder] = useState(boardDefaultValue);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const correctWord = 'ANIMAL';

  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterPosition > 5) return;
    const newWordsHolder = [...wordsHolder];
    newWordsHolder[currentAttempt.attempt][currentAttempt.letterPosition] =
      keyValue;
    setWordsHolder(newWordsHolder);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  };

  const onEnter = () => {
    if (currentAttempt.letterPosition != 6 || currentAttempt.attempt == 8)
      return;
    setCurrentAttempt({
      letterPosition: 0,
      attempt: currentAttempt.attempt + 1,
    });
  };

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newWordsHolder = [...wordsHolder];
    newWordsHolder[currentAttempt.attempt][currentAttempt.letterPosition - 1] =
      '';
    setWordsHolder(newWordsHolder);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
  };

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          wordsHolder,
          setWordsHolder,
          currentAttempt,
          setCurrentAttempt,
          onSelectLetter,
          onEnter,
          onDelete,
          correctWord,
        }}
      >
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}
