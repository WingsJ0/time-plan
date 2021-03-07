<!--
@name 卡片
-->

<template>
  <div class="card">
    <span class="name">{{ name }}</span>
    <span class="date">
      <span class="start">{{ start }}</span>
      <span> - </span>
      <span class="end">{{ end }}</span>
    </span>
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>
