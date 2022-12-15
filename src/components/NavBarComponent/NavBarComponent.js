const navBarComponent = () => {
    const div = document.createElement('div');
    const img = document.createElement("img");
    const a = document.createElement('a');

    img.src = "./src/img/github.svg";
    img.alt = "github";
    img.style.width = "50px";
    a.href = "https://github.com/yacdanyCR";
    a.target = "_blank";
    a.appendChild(img)
    div.className = "contact__Information";
    div.append(a);

    return div;
}

export {
    navBarComponent
}