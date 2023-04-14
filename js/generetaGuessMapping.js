var generetaGuessMapping = function (word) {
    var wordSplit = word.split("");
    var lettersToDisplay = [wordSplit[0], wordSplit[wordSplit.length - 1]];
    var guesses = wordSplit.map(function (letter, index, arr) {
        var isVisible = lettersToDisplay.includes(letter);
        return {
            letter: letter,
            isVisible: isVisible,
        };
    });
    return guesses;
};
export default generetaGuessMapping;
