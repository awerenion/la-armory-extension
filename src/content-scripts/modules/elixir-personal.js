import { createApp } from "vue";
import Elixir from "../view/Elixir.vue";

export async function loadCharacterElixirs(charName) {
    let elixirLevel = -1;
    chrome.runtime.sendMessage({type: 'load-elixirs', name: charName}, (response) => {
        elixirLevel = response.elixirLevel;
    });
    var waitLoadAndDocument = setInterval(function() {
        if (document && elixirLevel !== -1) {
            clearInterval(waitLoadAndDocument)
            setCharacterElixirHtml(elixirLevel)
        }
    }, 30);
}

const setCharacterElixirHtml = (level) => {
    if (level !== 0) {
        const element = document.querySelector('#profile-equipment');
        const newElement = document.createElement('div');
        newElement.classList.add('elixir-block')
        element.appendChild(newElement);
        createApp(Elixir, { level }).mount(newElement);
    }
}
