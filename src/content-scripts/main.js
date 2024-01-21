import {SETTINGS_DEFAULT} from "../constants/SettingsOptions";
import {displayQuality} from "./modules/quality-mod"
import {modifyEngravingsList} from "./modules/engravings-mod"
import {loadAllCharacters} from "./modules/gs-personal";

let cachedSettings = {};
let characterList = [];

async function initStorageCache() {
    await chrome.storage.sync.get().then((settings) => {
        Object.assign(cachedSettings, SETTINGS_DEFAULT, settings);
    })
}

try {
    document.querySelectorAll("#expand-character-list > ul > li").forEach((character) => {
        characterList.push({
            element: character.querySelector('span > button > span'),
            name: character.querySelector("button span").textContent,
            class: character.querySelector("button img").getAttribute('alt')
        });
    });

    initStorageCache()
        .then(() => {
            if (cachedSettings.loadAtStart) {
                loadAllCharacters(characterList)
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