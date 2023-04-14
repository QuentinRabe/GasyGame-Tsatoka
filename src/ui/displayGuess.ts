import Guess from "../types/Guess.js";

const displayGuess = (guesses: Guess[]): void => {
    const node = document.querySelector('.guess');
    if(!node) {
        return;
    }
    node.innerHTML = "";
    const pEls = guesses.map((guess) => {
        const pEl = document.createElement('p');
        pEl.classList.add("letter");
        if(!guess.isVisible){
            pEl.classList.add("hidden");
        }
        pEl.textContent = guess.isVisible ? guess.letter : "_";
        return pEl;
    });

    node.append(...pEls);
};

export default displayGuess;