const optionsAccerted = (randomWord, accertedLetters, letter) => {
    if (randomWord.includes(letter)) {
        const position = randomWord.indexOf(letter);
        accertedLetters[position] = letter;
        randomWord.splice(position, 1);
    }
}

export {
    optionsAccerted
}