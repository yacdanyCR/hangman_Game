const fragment = document.createDocumentFragment();

const fullAbecedary = () => {
    const abecedary = [];
    for (let index = 65; index <= 90; index++) {
        abecedary.push(String.fromCharCode(index));
    }
    return abecedary;
}

const keyBoardComponent = () => {
    const abecedary = fullAbecedary();
    abecedary.forEach(element => {
        const $button = document.createElement('button');
        $button.type = "button";
        $button.innerText = element;
        $button.value = element;

        fragment.append($button);
    });

    return fragment
}

export {
    keyBoardComponent
}