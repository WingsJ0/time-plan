<!--
@name 添加对话框
-->

<template>
  <div class="add-dialog">
    <div class="title">新建项目</div>
    <div class="subtitle">名称</div>
    <input class="input" v-model.trim="name" />
    <div class="subtitle">单日时长</div>
    <input class="input" v-model.trim.number="period" type="number" />
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>
