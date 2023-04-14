import startGame from "../main.js";
import displayHangman from "./displayHangman.js";
var displayEndGame = function (output, index, score, words) {
    var dialogEl = document.querySelector('dialog');
    if (dialogEl) {
        var loseEl = dialogEl.querySelector(".lose");
        var winEl = dialogEl.querySelector(".win");
        var wordEl = dialogEl.querySelector(".word");
        var remainEl = dialogEl.querySelector(".words-remain-lose");
        if (loseEl) {
            loseEl.classList.remove('hidden');
        }
        if (winEl) {
            winEl.classList.add('hidden');
        }
        if (wordEl) {
            wordEl.innerHTML = "\n            ".concat(output, "\n            ");
        }
        if (remainEl) {
            remainEl.innerHTML = "\n                Teny miafina ambiny : ".concat(words.length - (index.wordIndex + 1), " / ").concat(words.length, "\n            ");
        }
        dialogEl.showModal();
    }
    setTimeout(function () {
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
