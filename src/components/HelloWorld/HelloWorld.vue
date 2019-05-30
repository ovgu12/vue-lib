<template>
  <h1 class="text">Hello {{ text }}</h1>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop(String)
  public text!: string;
}
</script>

<style lang="scss" scoped>
.text {
  color: rgb(2, 27, 136);
}
</style>
