import Choice from "../types/Choice.js";
import Guess from "../types/Guess.js";
import displayChoices from "../ui/displayChoices.js";
import displayEndGame from "../ui/displayEndGame.js";
import displayGuess from "../ui/displayGuess.js";
import displayHangman from "../ui/displayHangman.js";
import displayWin from "../ui/displayWin.js";
import canPlayLetter from "./canPlayLetter.js";

const playLetter = (letter: string, choices: Choice[], guesses: Guess[], score: { penalty: number, maxScore: number}, word: string, index: {wordIndex: number}, words: string[]) => {
    if(!canPlayLetter(letter, choices, guesses)) {
        return;
    }

    choices.forEach((choice) => {
        if(choice.letter === letter) {
            choice.isVisible = false;
        }
    });
    displayChoices(choices, guesses);
    let isLetterInGuess = false;
    let hasLetterToGuess = false;

    guesses.forEach((guess) => {
        if(guess.letter === letter) {
            guess.isVisible = true;
            isLetterInGuess = true;
        }
        if(!guess.isVisible) {
            hasLetterToGuess = true;
        }
    });



    if(isLetterInGuess) {
        displayGuess(guesses);
        if(!hasLetterToGuess) {
            setTimeout(() => {
                displayWin(index, score, words);
            }, 1000)
        }
    } else {
        score.penalty++;
        if(score.maxScore >= score.penalty) {
            displayHangman(score.penalty);
        } else {
            setTimeout(() => {
                displayEndGame(word, index, score, words); 
            }, 1000)
        } 
    }
};

export default playLetter;