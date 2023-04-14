import Guess from "../types/Guess";

const generetaGuessMapping = (word: string): Guess[] => {
    const wordSplit = word.split("");
    const lettersToDisplay = [wordSplit[0], wordSplit[wordSplit.length - 1]];
    const guesses = wordSplit.map((letter, index, arr) => {
        let isVisible = lettersToDisplay.includes(letter);     
        return {
            letter,
            isVisible,
        };
    });

    return guesses;
};

export default generetaGuessMapping;