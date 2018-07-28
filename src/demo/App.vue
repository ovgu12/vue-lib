<template>
  <div id="app">
    <img src="../assets/logo.png">
    <hello-world text="Vue">
      <template slot="default" slot-scope="{data}">
        <icon v-if="data.id === 1"></icon>
      </template>
    </hello-world>
  </div>
</template>
<script src="./App.ts"></script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
