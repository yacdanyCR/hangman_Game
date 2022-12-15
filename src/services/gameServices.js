const optionsAccerted = (randomWord, accertedLetters, letter) => {
    if (randomWord.includes(letter)) {
        const position = randomWord.indexOf(letter);
        accertedLetters[position] = letter;
        randomWord[position] = "";
        return true
    }
    return false
}

const messageAlert = (message) => {
    const h1 = document.createElement('h1');
    h1.innerText = message;
    return h1;
}


export {
    optionsAccerted,
    messageAlert
}