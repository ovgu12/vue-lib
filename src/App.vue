<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="example-container">
      <example></example>
    </div>
  </div>
</template>

<script lang="ts">
import "basic.css";
import "chart.css";

import { Component, Vue } from "vue-property-decorator";
import Example from "./components/Example/Example";

@Component({
  components: {
    Example
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .example-container {
    width: 100%;
    height: 400px;
    position: relative;
  }
}
</style>
