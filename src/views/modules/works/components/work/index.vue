<!--
@name 工作
-->

<template>
  <div class="work">
    <div :style="{ 'flex-grow': '4' }">
      <input v-model="binding.name" />
    </div>
    <div :style="{ 'flex-grow': '2' }">
      <input v-model.number="binding.time" type="number" />
    </div>
    <div class="status" :style="{ 'flex-grow': '1' }">
      <span class="checkbox" :class="{ done: binding.status }" @click="handle_status_click"></span>
    </div>
    <div class="operation" :style="{ 'flex-grow': '2' }">
      <img src="~@/images/delete.svg" @click="handle_remove_click" />
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>
