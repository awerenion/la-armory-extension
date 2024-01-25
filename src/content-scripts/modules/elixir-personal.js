import { createApp } from "vue";
import { EQUIP_NAME, MAX_ELIXIR_EQUIP_COUNT, ELEMENT_CLASSES_TO_REMOVE } from '../../constants/Elixirs'
import { removeHtmlElements } from '../../utils/DOMUtils'
import Elixir from "../view/Elixir.vue";

export function validateCharacterGs(charName) {
    let characterGs = 0;
    chrome.runtime.sendMessage({type: 'load-character-info', name: charName}, (response) => {
        characterGs = response.gs
    })
    var waitLoadAndDocument = setInterval(function() {
        if (document && characterGs > 0) {
            clearInterval(waitLoadAndDocument)
            if (+characterGs >= 1600) {
                loadCharacterElixirs();
            }
        }
    }, 10);
}

function loadCharacterElixirs() {
    const equipmentList = document.querySelectorAll('.profile-equipment__slot>div');
    const [profileData] = JSON.parse(document.querySelector('#profile-ability > script').innerText.replace(/.+\{/, '[{').replace(/;\n$/, ']'))
    const items = [];
    equipmentList.forEach(element => {
        const classId = element.classList.length === 1 && +(element.className.replace(/slot(\d+)$/, '$1'))
        if (Number.isInteger(classId) && classId <= MAX_ELIXIR_EQUIP_COUNT) {
            const gearId = element.getAttribute('data-item');
            const equipItem = profileData.Equip[gearId]
            const itemName = EQUIP_NAME[classId - 1]
            const elixirs = !!equipItem.Element_008.value?.Element_000?.topStr && 
                Object
                    .values(equipItem.Element_008?.value?.Element_000?.contentStr)
                    .map(elixir => parseElixir(elixir.contentStr))
                || []

            items.push({
                itemName,
                elixirs
            })
        }
    })
    createApp(Elixir, { elixirs: items }).mount(createElixirBlock());
}

const parseElixir = (elixir) => {
    const [, elixirName, elixirValue] = elixir.match(/<\/FONT>(.*)<FONT color='#FFD200'>(.*)/);
    const elixirEffect = [...elixirValue.split('<br>')[1].split('<BR>')];
    const [elixirType] = elixir.match(/\[(.*)\]/)
    return {
        elixirLevel: elixirValue[0],
        elixirName: elixirName.trim(),
        elixirType,
        elixirEffect
    };
}

const createElixirBlock = () => {
    const element = document.querySelector('#profile-equipment');
    const newElement = document.createElement('div');

    newElement.classList.add('elixir-block')
    element.appendChild(newElement);

    removeHtmlElements(ELEMENT_CLASSES_TO_REMOVE)

    return newElement
}
