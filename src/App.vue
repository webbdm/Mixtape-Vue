<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
  name: 'app'
  }
</script>

<style>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }
  
  html {
    min-height: 100%
  }

  body {
    /*background-color: #1A273A;*/
    background-image: linear-gradient(to top right,#263145,#172236);
    height: 100vh;
    margin: 0;
  }

  * {
    font-family: 'Barlow', sans-serif;
  }

</style>
