<template>
    <li
        v-for="(character, idx) in sortedCharacterList"
        :key="idx + 'ch'"
    >
        <character :character="character" />
    </li>
</template>
  
<script setup>
import Character from './Character.vue';
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
  