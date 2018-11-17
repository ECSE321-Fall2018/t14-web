<template>
  <div id="app">
    <test></test>
    <img src="./assets/shoe.png"/>
    <router-view/>
  </div>
</template>

<script>
import Test from './components/test'
import Hello from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
