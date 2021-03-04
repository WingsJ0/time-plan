<!--
@name 配置
-->

<template>
  <div class="config">
    <div class="field">
      <span class="name">单日时长</span>
      <input v-model.number="project.config.period" type="number" />
    </div>
    <div class="field" tabindex="-1" @focus="handle_start_focus" @blur="handle_start_blur">
      <span class="name">起始日期</span>
      <div class="input">{{ project.config.start }}</div>
      <date-pick />
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>
