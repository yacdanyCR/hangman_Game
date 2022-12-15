const optionsAccerted = (randomWord, accertedLetters, letter) => {
    if (randomWord.includes(letter)) {
        const position = randomWord.indexOf(letter);
        accertedLetters[position] = letter;
        randomWord[position] = "";
        return true
    }
    return false
}

export {
    optionsAccerted
}