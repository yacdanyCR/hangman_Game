import { getRandomWordl } from "./Api/fetchApi.js";
import { cleanDisplay, displayComponent } from "./components/DisplayComponent/DisplayComponent.js";
import { hangedComponent } from "./components/HangedComponent/HangedComponent.js";
import { keyBoardComponent } from "./components/KeyBoardComponent/KeyBoardComponent.js";
import { loaderComponent } from "./components/LoaderComponent/LoaderComponent.js";
import { navBarComponent } from "./components/NavBarComponent/NavBarComponent.js";
import { messageAlert, optionsAccerted } from "./services/gameServices.js";

let randomWord = [];
let oportunities = 6;
const accertedLetters = [];

const $input__Section = document.querySelector('.input__Section');
const $keyboard__Section = document.querySelector('.keyboard__Section');
const $showing__hanged = document.querySelector('.showing__hanged');
const $header = document.querySelector('header');

$header.append(navBarComponent());
$keyboard__Section.append(keyBoardComponent());
$input__Section.append(loaderComponent());

getRandomWordl().then((data) => {
    randomWord = data.split('');
    randomWord.forEach(() => accertedLetters.push("_"));
    cleanDisplay($input__Section);
    $input__Section.append(displayComponent(accertedLetters));
    $showing__hanged.append(hangedComponent(oportunities));

    console.log(randomWord)
});

$keyboard__Section.addEventListener("click", (e) => {

    if (!optionsAccerted(randomWord, accertedLetters, e.target.value, oportunities)) {
        oportunities--;
    };
    cleanDisplay($input__Section);
    cleanDisplay($showing__hanged);
    $showing__hanged.append(hangedComponent(oportunities));
    $input__Section.append(displayComponent(accertedLetters));

    if (oportunities === 0) {
        cleanDisplay($input__Section);
        $input__Section.append(messageAlert("You've Lost..!!!"));
    }
});