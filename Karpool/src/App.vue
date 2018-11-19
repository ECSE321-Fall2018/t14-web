<template>
  <div id="app">
    
    <img src="./assets/shoe.png"/>
    <router-link to="active">Active</router-link>
    <router-link to="ranking">Ranking</router-link>
    <router-link to="HelloWorld">Hello</router-link>
    <router-view/>
    <Nav>
      

    </Nav>
  </div>
</template>

<script>
import Nav from './components/nav'
export default {
  name: 'App',
  components: {
    'Nav': Nav
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
