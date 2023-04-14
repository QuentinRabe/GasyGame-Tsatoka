var canPlayLetter = function (letter, choices, guesses) {
    var guessCanBePlayed = false;
    var choiceCanBePlayed = false;
    for (var _i = 0, guesses_1 = guesses; _i < guesses_1.length; _i++) {
        var guess = guesses_1[_i];
        if (guess.letter === letter && !guess.isVisible) {
            guessCanBePlayed = true;
        }
    }
    for (var _a = 0, choices_1 = choices; _a < choices_1.length; _a++) {
        var choice = choices_1[_a];
        if (choice.letter === letter && choice.isVisible) {
            choiceCanBePlayed = true;
        }
    }
    if (choiceCanBePlayed) {
        return true;
    }
    return (guessCanBePlayed && choiceCanBePlayed);
};
export default canPlayLetter;
