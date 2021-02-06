<!--
@name 根
-->

<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  html {
    color: #333333;
    font-size: 14px;
    font-family: 'Microsoft Jhenghei', 'Microsoft Yahei', sans-serif;
  }
  body {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
</style>
