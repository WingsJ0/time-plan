<!--
@name 配置
-->

<template>
  <div class="config">
    <div class="field">
      <span class="name">单日时长（小时）</span>
      <input v-model.number="project.config.period" type="number" />
    </div>
    <div class="field start" tabindex="-1">
      <span class="name">起始日期</span>
      <div class="input">{{ project.config.start }}</div>
      <date-pick class="date" v-model="project.config.start" />
    </div>
    <div class="field rest" tabindex="-1">
      <span class="name">休息日（周末默认）</span>
      <div class="input">
        <span v-for="a of project.config.rest" :key="a" class="item">
          <span>{{ a }}</span>
          <img class="remove" src="~@/image/x.svg" @click="handle_resetRemove_click(a)" />
        </span>
        <img class="add" src="~@/image/plus.svg" />
      </div>
      <date-pick class="date" :silent="true" @change="handle_rest_change" />
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>
