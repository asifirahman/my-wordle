import React, { useContext } from 'react';
import { AppContext } from '../App.js';

function Letter({ letterPosition, attemptValue }) {
  const { wordsHolder, correctWord } = useContext(AppContext);
  const letter = wordsHolder[attemptValue][letterPosition];

  // const correctPosition
  // const almostCorrect
  // const wrongPosition

//   const letterState

  return <div className="letter" id={""}>{letter}</div>;
}

export default Letter;
