var displayChoices = function (choices, guesses) {
    var node = document.querySelector('.choices ul');
    if (!node) {
        return;
    }
    node.innerHTML = "";
    var liEls = choices.map(function (choice) {
        var foundLetterInGuess = isLetterInGuess(choice.letter, guesses);
        if (foundLetterInGuess) {
            choice.isVisible = !foundLetterInGuess;
        }
        var liEl = document.createElement('li');
        liEl.classList.add("letter");
        if (!choice.isVisible) {
            liEl.classList.add("hidden");
        }
        liEl.textContent = choice.letter;
        return liEl;
    });
    node.append.apply(node, liEls);
};
var isLetterInGuess = function (letter, guesses) {
    return guesses.some(function (guess) { return guess.isVisible && guess.letter === letter; });
};
export default displayChoices;
