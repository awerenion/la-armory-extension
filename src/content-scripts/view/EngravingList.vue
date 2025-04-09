<template>
    <h4>Гравировки</h4>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <ul class="swiper-slide">
                <li
                    v-for="engravingInfo in engravingList"
                    class="swiper-slide-item"
                >
                    <engraving
                        :html="engravingInfo.html"
                        :name="engravingInfo.name"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import Engraving from "./Engraving.vue";

const props = defineProps({
    engravingList: Array
})
</script>

<style scoped>
.swiper-slide-item {
    padding: 5px 30px !important;
}

.engraving-list .engraving-item li.no-before::before {
    content: none !important;
}
</style>
