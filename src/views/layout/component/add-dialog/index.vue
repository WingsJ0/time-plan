<!--
@name 添加对话框
@event confirm 确认
-->

<template>
  <div class="add-dialog" :style="{ width: '450px' }" v-observe-visibility="handle_visibility">
    <div class="title">新建项目</div>
    <div class="field">
      <div class="label">名称</div>
      <input v-model.trim="name" />
    </div>
    <div class="field">
      <div class="label">单日时长</div>
      <input v-model.trim.number="period" type="number" />
    </div>

    <div class="foot">
      <button :disabled="!confirmable" @click="handle_confirm_click">确定</button>
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>
