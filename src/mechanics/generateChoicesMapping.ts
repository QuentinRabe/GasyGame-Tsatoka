import Choice from "../types/Choice";

const generateChoicesMapping = (letters: string[]): Choice[] => {
    const choicesMapping = letters.map((letter) => {
        return {
            letter,
            isVisible : true,
        };
    });
    return choicesMapping;
};
export default generateChoicesMapping;