<template>
  <div id="app">


    
    

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

export default {
  name: 'App',
  
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

navbar {
    overflow: auto;
    background-color: #333;
    position: fixed; 
    top: 0; 
    left: 0;
    width: 100%; 
    height: 50px;
    font-weight: 600;
    

}


navbar a {
    float: left;
    display: inline-block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 18px; 
    text-decoration: none;
    font-size: 17px;
}


navbar a:hover {
    background: #ddd;
    color: black;
}



</style>
