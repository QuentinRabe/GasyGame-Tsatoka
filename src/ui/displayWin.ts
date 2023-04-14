import startGame from "../main.js";
import displayHangman from "../ui/displayHangman.js";
let numberOfWin = 1;

const displayWin = (index: {wordIndex: number}, score: {penalty: number}, words: string[]) => {
    const dialogEl = document.querySelector('dialog') as HTMLDialogElement;
    if(dialogEl) {
        const loseEl = dialogEl.querySelector(".lose");
        const winEl = dialogEl.querySelector(".win");
        const foundEl = dialogEl.querySelector(".words-found-win");
        const remainEl = dialogEl.querySelector(".words-remain-win");
        if(loseEl) {
            loseEl.classList.add('hidden');
        }
        if(winEl) {
            winEl.classList.remove('hidden');
        }
        if(foundEl && remainEl) {
            foundEl.innerHTML = `
                Teny miafina hita : ${numberOfWin} / ${words.length}
            `;
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
        numberOfWin++;
    }, 3000)
};

export default displayWin;