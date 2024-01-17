<template>
    <li
        v-for="(character, idx) in sortedCharacterList"
        :key="idx + 'ch'"
    >
        <span>
            <button type="button">
                <img :src="character.img" :alt="character.characterClass">
                Ур.{{ character.level }}
                <span>{{ character.name }}({{ character.gs }})</span>
            </button>
        </span>
    </li>
</template>
  
<script setup>
import { computed } from 'vue';

const props = defineProps({
    characterList: Array,
})

const sortedCharacterList = computed(() => {
    return props.characterList.sort((a,b) => {
        if (+a.gs < +b.gs) {
            return 1;
        } else if (+a.gs > +b.gs) {
            return -1;
        }
        return 0;
    })
})
</script>
  