<!--
@name 工作列表
-->

<template>
  <div class="works">
    <div class="control">
      <img src="~@/image/plus.svg" @click="handle_add_click" />
    </div>

    <div class="head">
      <span :style="{ 'flex-grow': '5' }">名称</span>
      <span :style="{ 'flex-grow': '3' }">时长</span>
      <span class="operation" :style="{ 'flex-grow': '2' }">操作</span>
    </div>
    <div class="list">
      <transition-group name="flip">
        <card v-for="(a, i) of project.works" :key="a.id" :binding="a" :index="i" @remove="handle_work_remove" />
      </transition-group>
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>
