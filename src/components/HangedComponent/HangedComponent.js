const hangedComponent = (oportunities) => {
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < oportunities; index++) {
        const img = document.createElement('img');
        img.src = './src/img/heart.svg';
        img.alt = "life";

        fragment.append(img);
    }

    return fragment;
}

export {
    hangedComponent
}