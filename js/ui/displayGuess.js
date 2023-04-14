var displayGuess = function (guesses) {
    var node = document.querySelector('.guess');
    if (!node) {
        return;
    }
    node.innerHTML = "";
    var pEls = guesses.map(function (guess) {
        var pEl = document.createElement('p');
        pEl.classList.add("letter");
        if (!guess.isVisible) {
            pEl.classList.add("hidden");
        }
        pEl.textContent = guess.isVisible ? guess.letter : "_";
        return pEl;
    });
    node.append.apply(node, pEls);
};
export default displayGuess;
