<!--
@name 框架
-->

<template>
  <div class="layout">
    <div class="directory">
      <div class="list">
        <div v-for="(a, i) of directory" :key="a + i" class="entry" :class="{ active: current === a }" @click="handle_entry_click(a)">{{ a }}</div>
      </div>
      <div class="foot">
        <img class="button" src="~@/images/plus.svg" @click="handle_add_click" />
      </div>
    </div>
    <div class="content">
      <div class="title">
        <span class="name">{{ current }}</span>
      </div>
    </div>

    <transition name="fade">
      <div v-show="dialogShow" class="modal">
        <div class="mask" @click="handle_mask_click"></div>
        <div class="dialog">
          <add-dialog v-show="dialogType === 'add'" @confirm="handle_add_confirm" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>
