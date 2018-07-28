<template>
  <div class="icn">
    <slot>
      <button :class="btnClass">Click me</button>
    </slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    btnClass: {
      type: String,
      default: "btn"
    }
  }
});
</script>
