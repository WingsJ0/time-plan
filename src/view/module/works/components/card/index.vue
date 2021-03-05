<!--
@name 工作
-->

<template>
  <div class="card" :class="{ dragging }" draggable="true" @dragstart="handle_dragstart" @dragover="handle_dragover" @drop="handle_drop" @dragend="handle_dragend">
    <div :style="{ 'flex-grow': '5' }">
      <input v-model.trim="binding.name" @mousedown.stop.capture />
    </div>
    <div :style="{ 'flex-grow': '3' }">
      <input v-model.trim.number="binding.time" type="number" />
    </div>
    <div class="operation" :style="{ 'flex-grow': '2' }">
      <img src="~@/image/adjust.svg" />
      <img src="~@/image/x.svg" @click="handle_remove_click" />
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>
