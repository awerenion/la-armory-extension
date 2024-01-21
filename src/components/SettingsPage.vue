<script setup>
import {onMounted, reactive} from "vue";

const state = reactive({loadAtStart: true, modifyEngravings: true, displayQuality: true})

function restoreSettings() {
  chrome.storage.sync.get({
    loadAtStart: true,
    modifyEngravings: true,
    displayQuality: true
  }, function (items) {
    state.loadAtStart = items.loadAtStart;
    state.modifyEngravings = items.modifyEngravings;
    state.displayQuality = items.displayQuality;
  });
}

function saveSettings() {
  chrome.storage.sync.set({
    loadAtStart: state.loadAtStart,
    modifyEngravings: state.modifyEngravings,
    displayQuality: state.displayQuality
  }, savedSuccessfully);
}

function savedSuccessfully() {
  const status = document.getElementById('status');
  status.textContent = 'Настройки сохранены';
  setTimeout(function () {
    status.textContent = '';
  }, 750);
}

onMounted(() => {
  restoreSettings();
})
</script>

<template>
  <div class="ext-block">
    <label class="ext-block-labels">
      <input
        type="checkbox"
        v-model="state.loadAtStart"
      >
      Загружать рейтинг снаряжения
    </label>
    <label class="ext-block-labels">
      <input
        type="checkbox"
        v-model="state.modifyEngravings"
      >
      Список гравировок одним блоком(без разделения на страницы)
    </label>
    <label class="ext-block-labels">
      <input
        type="checkbox"
        v-model="state.displayQuality"
      >
      Отображать полоску с качеством
    </label>
  </div>
  <v-btn
    id="save"
    variant="outlined"
    color="normal"
    class="mb-3"
    @click="saveSettings"
  >Сохранить</v-btn>
  <div id="status"></div>
</template>

<style scoped>
.ext-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}

.ext-block-labels {
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
