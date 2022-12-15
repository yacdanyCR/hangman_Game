const loaderComponent = () => {
    const div = document.createElement('div');
    div.className = "lds-ring";
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < 3; index++) {
        const childDiv = document.createElement('div');
        div.append(childDiv);

        fragment.append(div);
    }

    return fragment
}

export {
    loaderComponent
}