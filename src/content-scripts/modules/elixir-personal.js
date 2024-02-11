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
            const elixirContent = getElixirContentOnEquipItem(equipItem)
            const elixirs = elixirContent && 
                Object
                    .values(elixirContent)
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
    try {
        const elixirMatch = elixir.match(/<\/FONT>(.*)<FONT color='#FFD200'>(.*)/);
        const [, elixirName, elixirValue] = elixirMatch
        const elixirEffect = [...elixirValue.split('<br>')[1].split('<BR>')];
        const [elixirType] = elixir.match(/\[(.*)\]/)
        return {
            elixirLevel: +elixirValue[0] || 0,
            elixirName: elixirName.trim(),
            elixirType,
            elixirEffect
        };
    } catch(err) {
        console.error(err)
    }

}

const createElixirBlock = () => {
    const element = document.querySelector('#profile-equipment');
    const newElement = document.createElement('div');

    newElement.classList.add('elixir-block')
    element.appendChild(newElement);

    removeHtmlElements(ELEMENT_CLASSES_TO_REMOVE)

    return newElement
}
// (╮°-°)╮┳━━┳ ( ╯°□°)╯ ┻━━┻
const getElixirContentOnEquipItem = (equipItem) => {
    try {
        if (!equipItem?.Element_007.value?.Element_000?.topStr && !equipItem?.Element_008.value?.Element_000?.topStr) {
            return null
        }
        return equipItem.Element_007?.value?.Element_000?.contentStr || equipItem?.Element_008?.value?.Element_000?.contentStr 
    } catch (err) {
        console.error(err)
        return null
    }
}