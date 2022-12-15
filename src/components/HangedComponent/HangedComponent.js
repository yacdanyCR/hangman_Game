const h1 = document.createElement('h1');

const hangedComponent = (oportunities) => {
    h1.innerText = oportunities;
    return h1;
}

export {
    hangedComponent
}