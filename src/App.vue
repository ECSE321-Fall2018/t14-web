
<template>


  <div id="app">


    
    

    <navbar> <!-- simple nav -->  
    <router-link to="/About">About</router-link>
    <router-link to="/UserRanking">Ranking</router-link>
    <router-link to="/test">Routes</router-link>
    <router-link to="/Active2">Passengers</router-link>
    <router-link to="/ActiveDrivers">Active</router-link>
    <router-link to="/loading">yeet</router-link>
    <router-link to="/search">search</router-link>
    </navbar>

    <router-view></router-view>
    
  

  </div>
</template>

<script>

export default {
  
  name: 'App',
  
  
}
</script>


@font-face { 
    src: url(fonts/BebasNeue Regular.otf/)
    font-family: Bebas Neue;
}



<style>
#app {

    
  
  font-family: Bebas Neue;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #D3D0DB;

  position: absolute; 
  top: 25%;

  
    text-decoration: none;
    font-size: 20px;

    

  position: absolute;
  top: 25%;
    text-decoration: none;
    
   
}







body{

background-image: url('../image/SVG/gifrating.gif');
    background-size: 38%;
     background-position: top;
   background-attachment: fixed;
    background-position: center;
    align-content: center;
    background-repeat: no-repeat;
    font-family: Arial, Helvetica, sans-serif; 
    font-size: 18px;


    
	


}


input[type="text"] {
    font-size:25px;
    box-shadow: none;
    background: transparent;
            border-top: transparent !important;
            border-left: transparent !important;
            border-right: transparent !important;
            border-bottom: 2px solid !important;
   font-weight: 200;
        color: #a5b1c2;
            padding-left: 0;
}
input:focus {
    outline:none !important;
}
input search{
  width: 200px;
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

UserRanking
{
    
}


navbar a {
    float: left;
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

.center {
   
    
}



</style>
