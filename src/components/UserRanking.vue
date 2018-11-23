<template>

<div id="main">

	<input type="text" v-model="search"/>   
	<button v-on:click="getTopDrivers(), getTopPassengers()">List Current Active Drivers</button>
	<!--
		getTopDrivers()
	<ul>
	<li v-for="driver in activeDrivers">
			{{driver.email}}</li>
	</ul>
<input type="radio" name="gender" id="male"> Male<br>
	<input type="radio" name="gender" id="female"> Female<br>
	<input type="radio" name="gender" value="other"> Other
	<button v-on:click =" check()">yeet</button>
-->
	<!-- <img src="../img/armystars/gifrating.gif"> -->
	
	<table id="customers">
	<tr>
		<th>Name</th>
		<th>Email</th>
		<th>Phone</th>
		<th>trips</th>
		
	</tr>
	<tr v-for="driver in activeDrivers">
		<td>{{driver.name}}</td>
		<td>{{driver.email}}</td>
		<td>{{driver.phoneNumber}}</td>
		<td>{{driver.trips}}</td>

	</tr>
	<br>
	</table>

	<table id="customers" style="display: inline-block;">
	<tr>
		<th>Name</th>
		<th>Email</th>
		<th>Phone</th>
		
		
	</tr>
	<tr v-for="passenger in activePassengers">
		<td>{{passenger.name}}</td>
		<td>{{passenger.email}}</td>
		<td>{{passenger.phoneNumber}}</td>
		
	</tr>
	</table>
	<br>

	<!-- 
	<table id="customers" style="display: inline-block;">
	<tr>
		<th>Name</th>
		<th>Email</th>
		<th>Phone</th>
		<th>trips</th>
		<th>some</th>
	</tr>
	<tr v-for="driver in activeDrivers">
		<td>{{driver.name}}</td>
		<td>{{driver.email}}</td>
		<td>{{driver.phoneNumber}}</td>
		<td>{{driver.trips}}</td>

	</tr>
	</table>
-->

	<span>yeeeeeeet</span>
	
</div>

</template>

<style>
	

#customers{
	position: absolute;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
}

img {
  background-image: url('../img/armystars/gifrating.gif');
    background-size: 38%;
     background-position: top;
   background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
}

</style>

<script>
	export default {
		name: 'UserRanking'
	}
	

</script>


<script src='../javascript/rankings.js'></script>