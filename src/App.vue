
<template>


  <div id="app">


    
    

    <navbar> <!-- simple nav -->  
    <router-link to="/main">Main</router-link>
    <router-link to="/UserRanking">Ranking</router-link>
    <router-link to="/ActiveParticipants">Active</router-link>
    
   
    
    </navbar>

    <router-view></router-view>
    
  

  </div>
</template>

<script>

export default {
  
  name: 'App',
  
  
}
</script>





<style>
#app {

    
  
  font-family: Bebas Neue;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  //color: #D3D0DB;

  position: absolute; 
  top: 25%;
  left: 30%;

  
    text-decoration: none;
    font-size: 12px;

    

  position: absolute;
  top: 10%;
    text-decoration: none;

}
   








body{


    align-content: center;
    
    font-family: Arial, Helvetica, sans-serif; 
    font-size: 14px;


    
	


}


input[type="text"] {
    font-size:20px;
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
    height: 9%;
    font-weight: 600;
    z-index: 100;

}




navbar a {
    float: left;
    display: inline-block;
    color: #f1f1f1;
    text-align: center;
    padding: 9px 14px; 
    text-decoration: none;
    font-size: 26px;
}


navbar a:hover {
    background: #ddd;
    color: black;
}




</style>
