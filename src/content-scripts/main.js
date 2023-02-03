import {SETTINGS_DEFAULT} from "../constants/SettingsOptions";
import {displayQuality} from "./modules/quality-mod"
import {modifyEngravingsList} from "./modules/engravings-mod"
import {getForClasses} from "./modules/gs-rating";
import {loadAllCharacters} from "./modules/gs-personal";

let cachedSettings = {};
let characterList = [];

async function initStorageCache() {
    await chrome.storage.sync.get().then((settings) => {
        Object.assign(cachedSettings, SETTINGS_DEFAULT, settings);
    })
}

let domCharacterList = document.querySelectorAll("#expand-character-list > ul > li");
domCharacterList.forEach((character) => {
    characterList.push({
        element: character.querySelector('span > button > span'),
        name: character.querySelector("button span").textContent,
        class: character.querySelector("button img").getAttribute('alt')
    });
});
let expandCharacterList = document.getElementById('expand-character-list');
let button = document.createElement('button');
button.onclick = (() => {
    loadAllCharacters(characterList)
});
button.innerHTML = '&circlearrowright;'
expandCharacterList.prepend(button);

try {
    initStorageCache().then(() => {
        if (cachedSettings.loadAtStart) {
            loadAllCharacters(characterList)
        } else {
            getForClasses(characterList)
        }
        if (cachedSettings.displayQuality) {
            displayQuality();
        }
        if (cachedSettings.modifyEngravings) {
            modifyEngravingsList();
        }
    });
} catch (e) {
    console.error(e)
}