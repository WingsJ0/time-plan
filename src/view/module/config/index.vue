<!--
@name 配置
-->

<template>
  <div class="config">
    <div class="field">
      <span class="name">单日时长</span>
      <input v-model.trim.number="project.config.period" type="number" />
    </div>
    <div class="field" tabindex="-1">
      <span class="name">起始日期</span>
      <div class="input">{{ project.config.start }}</div>
      <date-pick class="date" v-model="project.config.start" />
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>
