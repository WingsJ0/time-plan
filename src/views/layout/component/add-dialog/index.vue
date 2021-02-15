<!--
@name 添加对话框
@event confirm 确认
-->

<template>
  <div class="add-dialog" :style="{ width: '450px' }">
    <h2>新建项目</h2>
    <fieldset>
      <label>名称</label>
      <input v-model.trim="name" />
    </fieldset>
    <fieldset>
      <label>单日时长</label>
      <input v-model.trim.number="period" type="number" />
    </fieldset>

    <footer>
      <button :disabled="!confirmable" @click="handle_confirm_click">确定</button>
    </footer>
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
