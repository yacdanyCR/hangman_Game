const abecedary = ["A", "B", "C", "D", "E", "F"];
const fragment = document.createDocumentFragment();

const keyBoardComponent = () => {
    abecedary.forEach(element => {
        const $button = document.createElement('button');
        $button.type = "Button";
        $button.innerText = element;
        $button.value = element;

        fragment.append($button);
    });

    return fragment
}

export {
    keyBoardComponent
}