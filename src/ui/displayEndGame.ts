import startGame from "../main.js";
import displayHangman from "./displayHangman.js";


const displayEndGame = (output: string, index: {wordIndex: number}, score: {penalty: number}, words: string[]) => {
    const dialogEl = document.querySelector('dialog') as HTMLDialogElement;
    if(dialogEl) {
        const loseEl = dialogEl.querySelector(".lose");
        const winEl = dialogEl.querySelector(".win");
        const wordEl = dialogEl.querySelector(".word");
        const remainEl = dialogEl.querySelector(".words-remain-lose");
        if(loseEl) {
            loseEl.classList.remove('hidden');
        }
        if(winEl) {
            winEl.classList.add('hidden');
        }
        if(wordEl) {
            wordEl.innerHTML= `
            ${output}
            `;
        }
        if(remainEl) {
            remainEl.innerHTML = `
                Teny miafina ambiny : ${words.length - (index.wordIndex + 1)} / ${words.length}
            `;
        }
        dialogEl.showModal();
    }
    setTimeout(() => {
        index.wordIndex++;
        console.log(index.wordIndex);
        dialogEl.close();
        score.penalty = 0;
        startGame(index);
        console.log(score.penalty);
        displayHangman(score.penalty);
    }, 2000);
};

export default displayEndGame;