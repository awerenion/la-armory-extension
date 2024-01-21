import {createApp} from "vue";
import CharacterList from "../view/CharacterList.vue";

export function loadAllCharacters(charList) {
    const characters = {};
    var loadedCharactersCount = 0
    charList.forEach((character) => {
        chrome.runtime.sendMessage({type: 'load-character-info', name: character.name}, (response) => {
            characters[character.name] = {
                gs: response.gs,
                level: response.level
            };
            ++loadedCharactersCount
        })
    })
    var waitLoadAndDocument = setInterval(function() {
        if (document && loadedCharactersCount === charList.length) {
            clearInterval(waitLoadAndDocument)
            setCharactersGsHtml(characters)
        }
    }, 30);

}

const setCharactersGsHtml = (characters) => {
    const characterList = [];
    const charactersBlock = document.querySelectorAll('#expand-character-list > ul');
    charactersBlock.forEach((element, index) => {
        characterList.push([]);
        Array.from(element.children).forEach((character) => {
            const res = {};
            const charName = character.querySelector("button span").textContent;
            res.name = charName;
            res.gs = characters[charName].gs
            res.level = characters[charName].level;
            res.class = character.querySelector("button img").getAttribute('alt');
            res.img = character.querySelector("button img").getAttribute('src');
            characterList[index].push(res);
        })
        createApp(CharacterList, {characterList: characterList[index]}).mount(element);
    })
}
