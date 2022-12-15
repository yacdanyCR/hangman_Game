const optionsAccerted = (randomWord, accertedLetters, letter) => {
    if (randomWord.includes(letter)) {
        const position = randomWord.indexOf(letter);
        accertedLetters[position] = letter;
        randomWord[position] = "";
        return true
    }
    return false
}

const failedAlert = () => {
    const h1 = document.createElement('h1');
    h1.innerText = "You've Lost.!";
    return h1;
}

export {
    optionsAccerted,
    failedAlert
}