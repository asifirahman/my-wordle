import {wordBank} from "./wordBank";

// 6 letter word and 8 attempts
export const boardDefaultValue = [
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
  ];

export const generateWordSet = () => {
  let wordSet;
  wordSet = new Set(wordBank);
  return wordSet;
}



  