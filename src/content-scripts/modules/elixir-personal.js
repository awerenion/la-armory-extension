import { createApp } from "vue";
import { USELESS_EQUIP } from "../../constants/Elixirs";
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
    }, 30);
}

function loadCharacterElixirs() {
    let profileData = {};
    const equipmentList = document.querySelectorAll('.profile-equipment__slot>div');
    profileData = JSON.parse(document.querySelector('#profile-ability > script').innerText.replace(/.+\{/, '[{').replace(/;\n$/, ']'))
    const items = [];
    equipmentList.forEach(element => {
        if (element.classList.length === 1 && parseInt(element.className.replace(/slot(\d+)$/, '$1')) <= 11) {
            let gearId = element.getAttribute('data-item');
            const itemValue = profileData[0].Equip[gearId].Element_000.value;
            if (
                !itemValue.includes(USELESS_EQUIP[0]) &&
                !itemValue.includes(USELESS_EQUIP[1]) &&
                !itemValue.includes(USELESS_EQUIP[2])
            ) {
                let itemName = itemValue
                    .split('</FONT></P>')[0]
                    .split(': ')[1]
                    .replace('[I] ', '')
                    .replace('[II] ', '');
                if (itemName.includes('Преобр')) {
                    itemName = itemName.split(' ')[1]
                } else {
                    itemName = itemName.split(' ')[0]
                }
                itemName = itemName[0].toUpperCase() + itemName.slice(1);

                const elixirs = [];

                if (profileData[0].Equip[gearId].Element_008.value?.Element_000?.topStr) {
                    const elixirsBlock = profileData[0].Equip[gearId].Element_008.value.Element_000.contentStr
                    for (let elixir in elixirsBlock) {
                        const elixirSplit = elixirsBlock[elixir].contentStr.split("]</FONT>")[1].split("<FONT color='#FFD200'>");
                        let elixirEffect = [];
                        if (elixirSplit[1].split('<br>')[1].includes('<BR>')) {
                            elixirEffect = [...elixirSplit[1].split('<br>')[1].split('<BR>')];
                        } else {
                            elixirEffect.push(elixirSplit[1].split('<br>')[1])
                        }
                        const elixirType = '[' + elixirsBlock[elixir].contentStr.split('[')[1].split(']')[0] + ']'
                        elixirs.push({
                            elixirLevel: elixirSplit[1][0],
                            elixirName: elixirSplit[0].trim(),
                            elixirType,
                            elixirEffect
                        });
                    }
                }
                items.push({
                    itemName,
                    elixirs
                })
            }
        }
    })
    items.pop();
    const element = document.querySelector('#profile-equipment');
    const newElement = document.createElement('div');
    newElement.classList.add('elixir-block')
    element.appendChild(newElement);
    document.querySelector('.slot14').remove();
    document.querySelector('.slot15').remove();
    createApp(Elixir, { elixirs: items }).mount(newElement);
}
