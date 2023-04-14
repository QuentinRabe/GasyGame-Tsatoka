import startGame from "../main.js";
import displayHangman from "../ui/displayHangman.js";
var numberOfWin = 1;
var displayWin = function (index, score, words) {
    var dialogEl = document.querySelector('dialog');
    if (dialogEl) {
        var loseEl = dialogEl.querySelector(".lose");
        var winEl = dialogEl.querySelector(".win");
        var foundEl = dialogEl.querySelector(".words-found-win");
        var remainEl = dialogEl.querySelector(".words-remain-win");
        if (loseEl) {
            loseEl.classList.add('hidden');
        }
        if (winEl) {
            winEl.classList.remove('hidden');
        }
        if (foundEl && remainEl) {
            foundEl.innerHTML = "\n                Teny miafina hita : ".concat(numberOfWin, " / ").concat(words.length, "\n            ");
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
        numberOfWin++;
    }, 3000);
};
export default displayWin;
