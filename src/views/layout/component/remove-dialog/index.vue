<!--
@name 添加对话框
@event confirm 确认
-->

<template>
  <div class="remove-dialog" :style="{ width: '450px' }" v-observe-visibility="handle_visibility">
    <div class="title">删除项目项目</div>

    <div class="foot">
      <button @click="handle_cancel_click">取消</button>
      <button @click="handle_confirm_click">确定</button>
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>
