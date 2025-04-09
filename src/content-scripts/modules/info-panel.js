import { createApp } from "vue";
import InfoBlock from '../view/InfoBlock.vue';

export function validateCharacterGs() {
    const charName = document.querySelector('.profile-character-info__name').innerHTML
    let characterGs = 0;
    chrome.runtime.sendMessage({type: 'load-character-info', name: charName}, (response) => {
        characterGs = response.gs
    })
    var waitLoadAndDocument = setInterval(function() {
        if (document && characterGs > 0) {
            clearInterval(waitLoadAndDocument)
            if (+characterGs >= 1600) {
                loadCharacterInfo();
            }
        }
    }, 10);
}

export function loadCharacterInfo() {
    const equipmentList = document.querySelectorAll('.profile-equipment__slot>div');
    const [profileData] = JSON.parse(document.querySelector('#profile-ability > script').innerText.replace(/.+\{/, '[{').replace(/;\n$/, ']'))
    
    // Проверяем только первый предмет для получения общих значений
    const firstItem = equipmentList[0]
    if (firstItem) {
        const gearId = firstItem.getAttribute('data-item');
        const equipItem = profileData.Equip[gearId]
        const { totalTranscendence, maxElixirSetLevel } = getItemStats(equipItem)

        const infoBlock = document.querySelector('.profile-arkpassive__point');
        const evolutionHtml = infoBlock.querySelector('.arkpassive_evolution').innerHTML;
        const enlightenmentHtml = infoBlock.querySelector('.arkpassive_enlightenment').innerHTML;
        const leapHtml = infoBlock.querySelector('.arkpassive_leap').innerHTML;

        createApp(
            InfoBlock,
            {
                totalTranscendence,
                maxElixirSetLevel,
                evolutionHtml,
                enlightenmentHtml,
                leapHtml
            }).mount(infoBlock);
    }
}

const getItemStats = (equipItem) => {
    let totalTranscendence = 0
    let maxElixirSetLevel = 0

    // Поиск общего уровня трансценденции
    if (equipItem?.Element_009?.value?.Element_000?.contentStr?.Element_001?.contentStr) {
        const transcendenceMatch = equipItem.Element_009.value.Element_000.contentStr.Element_001.contentStr.match(/x(\d+)/)
        if (transcendenceMatch) {
            totalTranscendence = parseInt(transcendenceMatch[1])
        }
    }

    // Поиск максимального уровня сета эликсиров
    if (equipItem?.Element_011?.value?.Element_000?.topStr) {
        const setLevelMatch = equipItem.Element_011.value.Element_000.topStr.match(/\(ур\. (\d+)\)/)
        if (setLevelMatch) {
            maxElixirSetLevel = parseInt(setLevelMatch[1])
        }
    }

    return { totalTranscendence, maxElixirSetLevel }
}
