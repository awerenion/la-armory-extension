import { createApp } from "vue";
import EngravingList from "../view/EngravingList.vue";

export function modifyEngravingsList() {
    const engravingBlock = document.querySelector('.profile-ability-engrave');
    engravingBlock.style.height = 'auto';
    const allEngravingList = document.querySelectorAll('.swiper-slide>li');
    const engravingArray = [];
    if (allEngravingList.length > 0) {
        allEngravingList.forEach(element => {
            element.classList.add('no-before');
            const engravingInfo = {
                html: element.innerHTML
            }
            const nameElement = element.querySelector('span font');
            engravingInfo.name = nameElement ? nameElement.textContent : '';
            engravingArray.push(engravingInfo)
        })
    }
    createApp(EngravingList, {engravingList: engravingArray}).mount(engravingBlock);
}
