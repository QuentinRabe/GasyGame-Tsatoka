const onPressKeys = (callback: Function): void=> {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
        const key: string = event.key;
        const upperCaseKey = key.toUpperCase();
        if(upperCaseKey.length > 1 || upperCaseKey.charCodeAt(0) < 65 || upperCaseKey.charCodeAt(0) > 90) {
            return;
        }
        callback(upperCaseKey);
    });
}

export default onPressKeys;