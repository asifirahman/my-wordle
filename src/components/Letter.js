import React, { useContext } from 'react';
import { AppContext } from '../App.js';

function Letter({ letterPosition, attemptValue }) {
  const { wordsHolder, correctWord, currentAttempt } = useContext(AppContext);
  const letter = wordsHolder[attemptValue][letterPosition];
  const correctPosition = correctWord[letterPosition] === letter
  const almostCorrect  = !correctPosition && letter !== '' && correctWord.includes(letter)
  // const wrongPosition

  const letterState = currentAttempt.attempt > attemptValue && (correctPosition ? 'correct' : almostCorrect ? 'almost' : 'error')

  return <div className="letter" id={letterState}>{letter}</div>;
}

export default Letter;
