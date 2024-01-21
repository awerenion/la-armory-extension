<template>
    <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <div class="engraving-image">
                <img :src="getImageSrc(props.name)" class="engraving-image-item">
            </div>
            <span :class="{ 'negative-engraving': isNegative }" class="engraving-text">
                {{ props.name }}
            </span>
        </div>
        <span class="engraving-text">
            {{ props.level }} ур.
        </span>
    </div>
    <div class="profile-ability-tooltip">
        <p>{{ props.tooltipText }}</p>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { NEGATIVE_ENGRAVINGS } from "../../constants/NegativeEngravings";
import { ENGRAVINGS } from "../../constants/Engravings";

const props = defineProps({
    name: String,
    level: Number,
    tooltipText: String  
})

const getImageSrc = (engraveName) => {
    return 'https://static.monopoly.la.gmru.net/efui_iconatlas' + ENGRAVINGS[engraveName];
} 

const isNegative = computed(() => NEGATIVE_ENGRAVINGS.includes(props.name))
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
