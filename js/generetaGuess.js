var generetaGuess = function (word) {
    var wordSplit = word.split("");
    var guesses = wordSplit.map(function (letter) {
        return {
            letter: letter,
            isVisible: false,
        };
    });
    return guesses;
};
export default generetaGuess;
