import Choice from "../types/Choice.js";
import Guess from "../types/Guess.js";

const displayChoices = (
    choices: Choice[],
    guesses: Guess[]
):void => {
    const node = document.querySelector('.choices ul');
    if(!node) {
        return;
    }
    node.innerHTML="";
    const liEls = choices.map((choice) => {
        const foundLetterInGuess = isLetterInGuess(choice.letter,guesses);
        if(foundLetterInGuess) {
            choice.isVisible = !foundLetterInGuess;
        }
        const liEl = document.createElement('li');
        liEl.classList.add("letter");
        if(!choice.isVisible) {
            liEl.classList.add("hidden");
        }
        liEl.textContent = choice.letter;
        return liEl;
    });
    node.append(...liEls);
};

const isLetterInGuess = (letter: string, guesses: Guess[]): boolean => {
 return guesses.some((guess) => guess.isVisible && guess.letter === letter);
};

export default displayChoices;