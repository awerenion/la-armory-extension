<template>
    <div class="elixir-block-ext">
        <div class="elixirs-wrapper-ext">
            <div class="elixirs-wrapper-ext-header">
                <span style="font-size: 15px; line-height: 15px;">Эликсиры</span>
                <span>Уровень: {{ getElixirLevel }}</span>
            </div>
            <div class="elixirs-wrapper-ext-items-block">
                <div
                    v-for="(elixir, idx) in elixirs"
                    :key="'el' + idx"
                    class="elixirs-wrapper-ext-items"
                >
                    <span>{{ elixir.itemName }}</span>
                    <span>{{ getItemElixirLevel(elixir.elixirs) }} ур.</span>
                    <div
                        v-if="elixir.elixirs.length"
                        class="elixirs-wrapper-ext-items-info"
                    >
                        <div
                            v-for="(eInfo, edx) in elixir.elixirs"
                            :key="'ei' + edx"
                            style="margin-bottom: 16px;"
                        >
                            <div style="margin-bottom: 8px;">
                                <span style="color: #e4ba27;">{{ eInfo.elixirType }}</span>
                                {{ eInfo.elixirName }}
                                <span style="color: #e4ba27;">{{ eInfo.elixirLevel }}</span>
                                ур.
                            </div>
                            <div
                                v-for="(effects, efdx) in eInfo.elixirEffect"
                                :key="'ef' + efdx"
                                class="elixirs-wrapper-ext-items-info-effect"
                            >
                                {{ effects }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { computed } from 'vue';

const props = defineProps({
    elixirs: Array,
})

const getItemElixirLevel = (elixir) => {
    let level = 0;
    elixir.forEach((elixir) => {
        level += +elixir.elixirLevel
    })
    return level;
}

const getElixirLevel = computed(() => {
    let level = 0;
    props.elixirs.forEach((item) => {
        item.elixirs.forEach((elixir) => {
            level += +elixir.elixirLevel
        })
    })
    return level;
})
</script>

<style>
.elixir-block-ext {
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 13px;
    line-height: 13px;
    color: #fff;
}

.elixirs-wrapper-ext {
    width: 250px;
    height: 240px;
    background: #1d2026;
    color: #fff;
}

.elixirs-wrapper-ext-header {
    min-height: 50px;
    max-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background: #191b20;
    border-bottom: 1px solid #15171c;
}

.elixirs-wrapper-ext-items {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 0 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    line-height: 16px;
    color: #e4ba27;
    height: 30px;
}

.elixirs-wrapper-ext-items:hover {
    background: #17191e;
}

.elixirs-wrapper-ext-items:hover .elixirs-wrapper-ext-items-info {
    display: flex;
    flex-direction: column;
}

.elixirs-wrapper-ext-items-block {
    user-select: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    height: 190px;
    padding: 16px 0;
}

.elixirs-wrapper-ext-items-info {
    color: #fff;
    display: none;
    position: absolute;
    left: 103%;
    background: #2a2c35;
    border: 1px solid #181b26;
    padding: 20px;
    box-sizing: border-box;
    font-size: 13px;
    z-index: 10;
    flex-direction: column;
    width: 400px;
}

.elixirs-wrapper-ext-items-info-effect {
    margin-bottom: 4px;
    padding-left: 12px;
}

.elixirs-wrapper-ext-items-info-effect:last-child {
    margin-bottom: 0px;
}
</style>
