<!--
@name 配置
-->

<template>
  <div class="config">
    <div class="field">
      <span class="name">单日时长</span>
      <input v-model.number="project.config.period" type="number" @change="handle_input_change" />
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>
