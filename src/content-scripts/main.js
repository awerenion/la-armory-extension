import { SETTINGS_DEFAULT } from "../constants/SettingsOptions";
import { displayQuality } from "./modules/quality-mod"
import { modifyEngravingsList } from "./modules/engravings-mod"
import { loadAllCharacters } from "./modules/gs-personal";
import { validateCharacterGs } from "./modules/elixir-personal";

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
            name: character.querySelector("button span").textContent,
            class: character.querySelector("button img").getAttribute('alt')
        });
    });

    const charName = document.querySelector('.profile-character-info__name').innerHTML

    initStorageCache()
        .then(() => {
            if (cachedSettings.loadElixirs) {
                validateCharacterGs(charName)
            }
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
