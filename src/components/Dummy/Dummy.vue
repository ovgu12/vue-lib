<template>
  <button class="btn" @click="onClick($event)">Click me</button>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    onClick: ($event: any) => {
      console.log("Clicked", $event);
    }
  }
});
</script>
