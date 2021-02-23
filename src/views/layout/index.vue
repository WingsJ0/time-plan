<!--
@name 框架
-->

<template>
  <div class="layout">
    <div class="directory">
      <div class="projects">
        <div v-for="a of projects" :key="a.name" class="entry">{{ a.name }}</div>
      </div>
      <div class="foot">
        <img class="button" src="~@/images/plus.svg" @click="handle_add_click" />
      </div>
    </div>
    <div class="wrap"></div>

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
