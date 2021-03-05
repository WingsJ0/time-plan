<!--
@name 时间选择
-->

<template>
  <div class="date-pick">
    <div class="head">
      <span class="button" @click="handle_adjust_click('year', -1)">
        <img class="icon" src="~@/image/triangle-left.svg" />
        <img class="icon" src="~@/image/triangle-left.svg" />
      </span>
      <span class="button" @click="handle_adjust_click('month', -1)">
        <img class="icon" src="~@/image/triangle-left.svg" />
      </span>
      <span class="year">{{ year }} 年</span>
      <span class="month">{{ month.toString().padStart(2, '0') }} 月</span>
      <span class="button" @click="handle_adjust_click('month', 1)">
        <img class="icon" src="~@/image/triangle-right.svg" />
      </span>
      <span class="button" @click="handle_adjust_click('year', 1)">
        <img class="icon" src="~@/image/triangle-right.svg" />
        <img class="icon" src="~@/image/triangle-right.svg" />
      </span>
    </div>
    <div class="grid">
      <span class="week">日</span>
      <span class="week">一</span>
      <span class="week">二</span>
      <span class="week">三</span>
      <span class="week">四</span>
      <span class="week">五</span>
      <span class="week">六</span>

      <span v-for="i of start" :key="i"></span>
      <span v-for="i of length" :key="i" class="day" :class="{ active: i === day }" @click="handle_day_click(i)">{{ i }}</span>
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>
