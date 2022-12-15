import { getRandomWordl } from "./Api/fetchApi.js";
import { cleanDisplay, displayComponent } from "./components/DisplayComponent/DisplayComponent.js";
import { keyBoardComponent } from "./components/KeyBoardComponent/KeyBoardComponent.js";
import { optionsAccerted } from "./services/gameServices.js";

let randomWord = "";
const accertedLetters = [];

const $input__Section = document.querySelector('.input__Section');
const $keyboard__Section = document.querySelector('.keyboard__Section');

$keyboard__Section.append(keyBoardComponent());
getRandomWordl().then((data) => {
    randomWord = data.split('');
    randomWord.forEach(() => accertedLetters.push("_"));
    $input__Section.append(displayComponent(accertedLetters));
});

$keyboard__Section.addEventListener("click", (e) => {
    cleanDisplay($input__Section);
    optionsAccerted(randomWord, accertedLetters, e.target.value);
    $input__Section.append(displayComponent(accertedLetters))
    console.log(randomWord)
});