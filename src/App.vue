<template>
  <div id="app">


    
    

    <navbar> <!-- simple nav -->
      
     
      <router-link to="/">Home</router-link>
      <router-link to="/Active">Drivers</router-link>
      <router-link to="/Active2">Passengers</router-link>
      <router-link to="/">Routes</router-link>
      <router-link to="/ranking">Ranking</router-link>
      <router-link to="/About">About</router-link>
      <router-link to="/ActivePassengers">ron</router-link>
    
    </navbar>

    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
#app {
  
  font-family: 'Bebas Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #D3D0DB;
  margin-top: 200px;
  
  width: 50%;
}

navbar {
    overflow: auto;
    background-color: #343434;
    position: fixed; 
    top: 0; 
    left: 0;
    width: 100%; 
    height: 50px;
    font-weight: 600;
    

}


navbar a {
    float: right;
    display: inline-block;
    color: #f1f1f1;
    text-align: center;
    padding: 14px 14px; 
    text-decoration: none;
    font-size: 26px;
}


navbar a:hover {
    background: #ddd;
    color: black;
}



</style>
