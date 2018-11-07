<template>
<div class="text">
    Hello {{ text }} <slot v-bind:data="data" name="default"></slot>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

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
  color: green;
}
</style>
