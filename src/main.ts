import pickWord from './mechanics/pickWord.js'; 
import generateChoices from './mechanics/generateChoices.js';
import generateChoicesMapping from './mechanics/generateChoicesMapping.js';
import Choice from './types/Choice.js';
import displayChoices from './ui/displayChoices.js';
import displayGuess from './ui/displayGuess.js';
import generetaGuessMapping from './mechanics/generetaGuessMapping.js';
import Guess from './types/Guess.js';
import onClickChoices from './events/onClickChoices.js';
import onPressKeys from './events/onPressKeys.js';
import playLetter from './mechanics/playLetter.js';
import shuffleArray from './mechanics/shuffleArray.js';


const words: string[] = [
    "MENATRA",
    "TANORA",
    "ALATSINAINY",
    "SAMIHAFA",
    "FAHEFANA",
    "FANAGASIANA",
    "LEHIBE",
    "FIRENENA",
    "TANINDRAZANA",
    "FANJAKANA",
    "FAHALEOVANTENA",
    "VALISOA",
    "SANTATRA",
    "FINOANA",
    "LEHILAHY",
    "POLITIKA",
    "FAMPIANARANA",
    "MPANJANATANY",
    "FANJAKAZAKANA",
    "VOALOHANY",
    "ALAHADY",
    "NATOLOTRA",
    "SAOTRA",
    "FANAJANA",
    "FIDERANA",
    "LAFITSARANY",
    "FAHAIZANA",
];
  

let word: string;
let guessMapping: Guess[];
let choices: string[];
let choicesMapping: Choice[];
let score = {
    maxScore : 3,
    penalty : 0,
}
let index = {
    wordIndex : 0,
}

shuffleArray(words);
console.log(words);

const init = (): void => {
    console.log('#init');
    
    
    startGame(index); 

    

    
    
    
}

const startGame = (index: {wordIndex: number}): void => {
    if(words.length >= index.wordIndex){
        word = pickWord(words, index);
        console.log(word);
        guessMapping = generetaGuessMapping(word);
        choices = generateChoices();
        choicesMapping = generateChoicesMapping(choices);
        displayGuess(guessMapping);
        displayChoices(choicesMapping, guessMapping);
        onClickChoices((letter: string) => playLetter(letter, choicesMapping, guessMapping, score, word, index, words));
        onPressKeys((letter: string) => playLetter(letter, choicesMapping, guessMapping, score, word, index, words));
    } else {
        window.location = window.location;
    }
}


window.addEventListener("load", init);

export default startGame;
