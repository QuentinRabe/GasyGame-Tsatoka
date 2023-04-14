var displayHangman = function (penalty) {
    var hangmanEl = document.querySelector('.hangman');
    if (hangmanEl) {
        hangmanEl.innerHTML = "";
    }
    var imgEl = document.createElement('img');
    imgEl.src = "/img/00".concat(penalty, ".svg");
    hangmanEl === null || hangmanEl === void 0 ? void 0 : hangmanEl.append(imgEl);
};
export default displayHangman;
