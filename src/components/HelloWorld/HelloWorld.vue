<template>
  <div class="text">Hello {{ text }}</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop(String)
  public text!: string;
  @Prop(Object)
  public data!: object;
}
</script>

<style scoped>
.text {
  color: rgb(2, 27, 136);
}
</style>
