<!--
@name 工作列表
-->

<template>
  <div class="works">
    <div class="head">
      <span :style="{ 'flex-grow': '4' }">名称</span>
      <span :style="{ 'flex-grow': '2' }">时长</span>
      <span class="status" :style="{ 'flex-grow': '1' }">完成</span>
      <span class="operation" :style="{ 'flex-grow': '2' }">操作</span>
    </div>
    <div>
      <work v-for="(a, i) of project.works" :key="i" :binding="a" @remove="handle_work_remove" />
    </div>
    <div class="control">
      <img class="add" src="~@/images/plus.svg" @click="handle_add_click" />
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>
