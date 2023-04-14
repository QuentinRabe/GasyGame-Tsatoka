var generateChoicesMapping = function (letters) {
    var choicesMapping = letters.map(function (letter) {
        return {
            letter: letter,
            isVisible: true,
        };
    });
    return choicesMapping;
};
export default generateChoicesMapping;
