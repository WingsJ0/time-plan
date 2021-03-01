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
    <div v-if="current" class="content">
      <div class="head">
        <div class="title">
          <span class="name">{{ current }}</span>
          <img class="remove" src="~@/images/delete.svg" @click="handle_remove_click" />
        </div>
        <div class="tabs">
          <router-link class="tab" active-class="active" tag="span" :to="{ name: 'config' }">配置</router-link>
          <router-link class="tab" active-class="active" tag="span" :to="{ name: 'work' }">工作</router-link>
        </div>
      </div>
      <div class="wrap">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
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
