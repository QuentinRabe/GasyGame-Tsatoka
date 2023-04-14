var generateChoices = function () {
    var choices = [];
    for (var index = 65; index <= 90; index++) {
        choices.push(String.fromCharCode(index));
    }
    return choices;
};
export default generateChoices;
