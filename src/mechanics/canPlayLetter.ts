import Choice from "../types/Choice";
import Guess from "../types/Guess";

const canPlayLetter = (letter: string, choices: Choice[], guesses: Guess[]) => {
    let guessCanBePlayed = false;
    let choiceCanBePlayed = false;

    for(const guess of guesses) {
        if(guess.letter === letter && !guess.isVisible){
            guessCanBePlayed = true;
        }
    }
    
    for(const choice of choices) {
        if(choice.letter === letter && choice.isVisible){
            choiceCanBePlayed = true;
        }
    }

    if(choiceCanBePlayed) {
        return true;
    } 

    return (guessCanBePlayed && choiceCanBePlayed);
};

export default canPlayLetter;