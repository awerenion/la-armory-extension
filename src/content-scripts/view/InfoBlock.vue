<template>
    <div class="arkpassive_evolution" v-html="evolutionHtml"></div>
    <div class="arkpassive_enlightenment" v-html="enlightenmentHtml"></div>
    <div class="arkpassive_leap" v-html="leapHtml"></div>
    <div class="transendence">
        <img src="https://static.monopoly.la.gmru.net/2018/obt/assets/images/common/game/ico_tooltip_transcendence.png" width="20" height="20" vspace="-4" style="padding-right: 10px">
        <span style="color: #FEF368; font-size: 13px;">{{ totalTranscendence }}</span>
    </div>
    <div class="elixir gradient-border-btn">
        <img src="https://assets-ng.maxroll.gg/laplanner/webp/use_12_129.webp" width="20" height="20" vspace="-4" style="padding-right: 5px">
        <span style="color: #FEF368; font-size: 13px;">ур. {{ maxElixirSetLevel }}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    totalTranscendence: Number,
    maxElixirSetLevel: Number,
    evolutionHtml: String,
    enlightenmentHtml: String,
    leapHtml: String,
})
</script>

<style>
.profile-arkpassive__point {
    display: flex;
    align-items: center;
}

.profile-arkpassive-tooltip {
    display: none !important;
}

.transendence {
    border: 2px solid #A57F4A;
}

.elixir {
    border: 2px solid #91AF3F;
}

.transendence,
.elixir {
    height: 22px !important;
    background: none !important;
    display: flex;
    align-items: center;
    padding: 0 8px 0 4px !important;
    border-radius: 40px;
}
</style>