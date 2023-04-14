const generateChoices = (): string[] => {
    const choices: string[] = [];
        for (let index: number = 65; index <= 90; index++) {
            choices.push(String.fromCharCode(index));
        }
    return choices;

};

export default generateChoices;