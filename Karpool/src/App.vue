<template>
  <div id="app">


    <router-view/>
    

    <navbar> <!-- simple nav -->
      
      <router-link to="/">Home</router-link>
      <router-link to="/active">Status</router-link>
      <router-link to="/">Overview</router-link>
      <router-link to="/ranking">Ranking</router-link>
      <router-link to="/about">About</router-link>
    
    </navbar>

    <router-view/>

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
  
  width: 50%;
}

nav {
    overflow: hidden;
    background-color: #333;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
}

/* Links inside the navbar */
nav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

/* Change background on mouse-over */
nav a:hover {
    background: #ddd;
    color: black;
}



</style>
