import pickWord from './mechanics/pickWord.js';
import generateChoices from './mechanics/generateChoices.js';
import generateChoicesMapping from './mechanics/generateChoicesMapping.js';
import displayChoices from './ui/displayChoices.js';
import displayGuess from './ui/displayGuess.js';
import generetaGuessMapping from './mechanics/generetaGuessMapping.js';
import onClickChoices from './events/onClickChoices.js';
import onPressKeys from './events/onPressKeys.js';
import playLetter from './mechanics/playLetter.js';
import shuffleArray from './mechanics/shuffleArray.js';
var words = [
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
var word;
var guessMapping;
var choices;
var choicesMapping;
var score = {
    maxScore: 3,
    penalty: 0,
};
var index = {
    wordIndex: 0,
};
shuffleArray(words);
console.log(words);
var init = function () {
    console.log('#init');
    startGame(index);
};
var startGame = function (index) {
    // Pick word
    if (words.length >= index.wordIndex) {
        word = pickWord(words, index);
        console.log(word);
        guessMapping = generetaGuessMapping(word);
        choices = generateChoices();
        choicesMapping = generateChoicesMapping(choices);
        displayGuess(guessMapping);
        displayChoices(choicesMapping, guessMapping);
        onClickChoices(function (letter) { return playLetter(letter, choicesMapping, guessMapping, score, word, index, words); });
        onPressKeys(function (letter) { return playLetter(letter, choicesMapping, guessMapping, score, word, index, words); });
    }
    else {
        window.location = window.location;
    }
};
window.addEventListener("load", init);
export default startGame;
