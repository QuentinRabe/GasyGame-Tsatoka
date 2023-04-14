var generateChoicesMapping = function (letters) {
    var choicesMapping = letters.map(function (letter) {
        return {
            letter: letter,
            isVisible: false,
        };
    });
    return choicesMapping;
};
export default generateChoicesMapping;
