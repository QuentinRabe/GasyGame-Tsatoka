import displayChoices from "../ui/displayChoices.js";
import displayEndGame from "../ui/displayEndGame.js";
import displayGuess from "../ui/displayGuess.js";
import displayHangman from "../ui/displayHangman.js";
import displayWin from "../ui/displayWin.js";
import canPlayLetter from "./canPlayLetter.js";
var playLetter = function (letter, choices, guesses, score, word, index, words) {
    if (!canPlayLetter(letter, choices, guesses)) {
        return;
    }
    choices.forEach(function (choice) {
        if (choice.letter === letter) {
            choice.isVisible = false;
        }
    });
    displayChoices(choices, guesses);
    var isLetterInGuess = false;
    var hasLetterToGuess = false;
    guesses.forEach(function (guess) {
        if (guess.letter === letter) {
            guess.isVisible = true;
            isLetterInGuess = true;
        }
        if (!guess.isVisible) {
            hasLetterToGuess = true;
        }
    });
    if (isLetterInGuess) {
        displayGuess(guesses);
        if (!hasLetterToGuess) {
            setTimeout(function () {
                displayWin(index, score, words);
            }, 1000);
        }
    }
    else {
        score.penalty++;
        if (score.maxScore >= score.penalty) {
            displayHangman(score.penalty);
        }
        else {
            setTimeout(function () {
                displayEndGame(word, index, score, words);
            }, 1000);
        }
    }
};
export default playLetter;
