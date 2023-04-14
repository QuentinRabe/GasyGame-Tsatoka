const pickWord = (words: string[], index: {wordIndex: number}): string => {
    return words[index.wordIndex];
}

export default pickWord;