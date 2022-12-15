import { getRandomWordl } from "./Api/fetchApi.js";
import { keyBoardComponent } from "./components/KeyBoardComponent/KeyBoardComponent.js"

const $keyboard__Section = document.querySelector('.keyboard__Section');
$keyboard__Section.append(keyBoardComponent());

let randomWord = "";
getRandomWordl().then((data) => {
    randomWord = data.split('');
});

$keyboard__Section.addEventListener("click", async (e) => {
    console.log(e.target.value);

    console.log(randomWord)
}); 