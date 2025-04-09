<template>
    <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <div class="engraving-image">
                <img :src="getImageSrc(props.name)" class="engraving-image-item">
            </div>
            <span v-html="html"/>
        </div>
    </div>
</template>

<script setup>
import { ENGRAVINGS } from "../../constants/Engravings";

const props = defineProps({
    name: String,
    html: String,
})

const getImageSrc = (engraveName) => {
    return 'https://static.monopoly.la.gmru.net/efui_iconatlas' + ENGRAVINGS[engraveName];
} 
</script>

<style scoped>
.negative-engraving {
    color: red !important;
}

.engraving-image {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 30px;
    height: 30px;
    background: url('https://static.monopoly.la.gmru.net/2018/obt/assets/images/common/game/bg_equipment_slot_engrave.png?883579bbd600f7e985381d76cc61845a');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.engraving-image::before {
    width: 30px;
    height: 30px;
    content: '';
    position: absolute;
    background: url('https://static.monopoly.la.gmru.net/2018/obt/assets/images/common/game/bg_equipment_slot_engrave_over.png?dfa049c7fe18a5887b24c846db7b2dcc');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.engraving-image-item {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, #232323 0%, #575757 100%);
}

.engraving-text {
    font-size: 16px;
    line-height: 16px;
}
</style>
