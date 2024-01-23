<template>
    <div class="elixir-block-ext">
        Общий уровень эликсиров: {{ level }}
    </div>
</template>
  
<script setup>

const props = defineProps({
    level: Number,
})
</script>

<style scoped>
.elixir-block-ext {
    position: absolute;
    left: 5px;
    top: 5px;
    font-size: 13px;
    line-height: 13px;
    color: #fff;
}
</style>
