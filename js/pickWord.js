var pickWord = function (words) {
    var randomIndex = Math.floor(Math.random() * words.length);
    var word = words[randomIndex];
    return word;
};
export default pickWord;
