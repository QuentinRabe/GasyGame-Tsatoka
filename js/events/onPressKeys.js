var onPressKeys = function (callback) {
    document.addEventListener('keydown', function (event) {
        var key = event.key;
        var upperCaseKey = key.toUpperCase();
        if (upperCaseKey.length > 1 || upperCaseKey.charCodeAt(0) < 65 || upperCaseKey.charCodeAt(0) > 90) {
            return;
        }
        callback(upperCaseKey);
    });
};
export default onPressKeys;
