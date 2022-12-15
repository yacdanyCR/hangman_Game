import { getRandomWordl } from "./Api/fetchApi.js";
import { cleanDisplay, displayComponent } from "./components/DisplayComponent/DisplayComponent.js";
import { hangedComponent } from "./components/HangedComponent/HangedComponent.js";
import { keyBoardComponent } from "./components/KeyBoardComponent/KeyBoardComponent.js";
import { loaderComponent } from "./components/LoaderComponent/LoaderComponent.js";
import { optionsAccerted } from "./services/gameServices.js";

let randomWord = "";
let oportunities = 5;
const accertedLetters = [];

const $input__Section = document.querySelector('.input__Section');
const $keyboard__Section = document.querySelector('.keyboard__Section');
const $showing__hanged = document.querySelector('.showing__hanged');

$keyboard__Section.append(keyBoardComponent());
$input__Section.append(loaderComponent());

getRandomWordl().then((data) => {
    randomWord = data.split('');
    randomWord.forEach(() => accertedLetters.push("_"));
    cleanDisplay($input__Section);
    $input__Section.append(displayComponent(accertedLetters));
    $showing__hanged.append(hangedComponent(oportunities));
});

$keyboard__Section.addEventListener("click", (e) => {
    cleanDisplay($input__Section);
    if (!optionsAccerted(randomWord, accertedLetters, e.target.value, oportunities)) {
        oportunities--;
    };
    cleanDisplay($showing__hanged);
    $showing__hanged.append(hangedComponent(oportunities));
    $input__Section.append(displayComponent(accertedLetters));
});