var onClickChoices = function (callback) {
    var node = document.querySelector('.choices');
    if (!node) {
        return;
    }
    node.addEventListener('click', function (_a) {
        var target = _a.target;
        if (!(target instanceof Element)) {
            return;
        }
        var letter = target.textContent;
        if ((letter === null || letter === void 0 ? void 0 : letter.length) != 1) {
            return;
        }
        callback(letter.toLocaleUpperCase());
    });
};
export default onClickChoices;
