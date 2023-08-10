import React, { useState, createContext, useEffect } from 'react';
import './style.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefaultValue, generateWordSet } from './utils/boardDefaultVal';

export const AppContext = createContext();

export default function App() {
  const [wordsHolder, setWordsHolder] = useState(boardDefaultValue);
  const [wordSet, setWordSet] = useState(new Set())
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const correctWord = 'ANIMAL';

  useEffect(() => {
    setWordSet(generateWordSet())
  }, [])


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

    let currentWord = ''
    for(let i = 0; i< 6; i++){
      currentWord += wordsHolder[currentAttempt.attempt][i]
    }
    if(wordSet.has(currentWord)) {
      setCurrentAttempt({
        letterPosition: 0,
        attempt: currentAttempt.attempt + 1,
      });
    } else {
      alert("Word not found!!!")
    }

    if(currentWord === correctWord) {
      alert("You Won!!!")
    }
    
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
