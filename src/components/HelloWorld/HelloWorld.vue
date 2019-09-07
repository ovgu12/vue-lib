<template>
  <div class="hello-world">Hello {{ text }}</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop(String)
  public text!: string;
}
</script>

<style lang="scss" scoped>
.hello-world {
  color: rgb(2, 27, 136);
  font-size: 0.9125rem;
}
</style>
