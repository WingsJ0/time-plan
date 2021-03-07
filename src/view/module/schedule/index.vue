<!--
@name 工作列表
-->

<template>
  <div class="schedule">
    <div class="head">
      <span class="name">名称</span>
      <span class="date">日期</span>
    </div>
    <div class="list">
      <card v-for="(a, i) of schedules" :key="i" :name="a.name" :start="a.start" :end="a.end" />
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>
