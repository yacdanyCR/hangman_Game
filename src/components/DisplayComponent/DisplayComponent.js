const displayComponent = (accertedLetters) => {
    const fragment = document.createDocumentFragment();

    accertedLetters.forEach(element => {
        const h1 = document.createElement('h1');
        h1.innerText = element;
        fragment.append(h1);
    });

    return fragment;
}

const cleanDisplay = (input) => {
    while (input.childNodes.length > 0) {
        input.removeChild(input.firstChild);
    }
}

export {
    displayComponent,
    cleanDisplay
}