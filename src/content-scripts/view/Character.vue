<template>
    <span>
        <button
            type="button"
            @click="moveTo(character.name)"
        >
            <img :src="character.img" :alt="character.characterClass">
            <span>{{ character.name }}({{ character.gs }})</span>
            Рейтинг: {{ placement || 'Не в рейтинге' }}
        </button>
    </span>
</template>
  
<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    character: Object,
})

const moveTo = (name) => {
    location.href = `/Profile/Character/${name}`
}

const placement = ref(null);

onMounted(() => {
    chrome.runtime.sendMessage({
        type: 'load-for-class',
        message: props.character.characterClass,
        nickname: props.character.name
    }, (response) => {
        placement.value = response.placement || null;
    });
})
</script>
