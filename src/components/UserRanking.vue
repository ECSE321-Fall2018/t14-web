<template>

<div id="main">

	 
	<h1>Rankings</h1>
<input type="text" v-model="search" size="60" style="width: 500px; height: 40px;" 
		placeholder="top user..."  />  
	
	<table id="customers" >
		<caption>TOP RANKED DRIVERS</caption>
	<tr>
		<th>Name</th>
		<th>Email</th>
		<th>Phone</th>
		<th>trips</th>
		
	</tr>
	<tr v-for="customer in filteredDriver">
		<td>{{customer.name}}</td>
		<td>{{customer.email}}</td>
		<td>{{customer.phoneNumber}}</td>
		<td>{{customer.trips}}</td>

	</tr>
	<br>
	</table>

	<table id="customers" style="margin-top: 75%;">
		<caption>TOP RANKED PASSENGERS</caption>
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

	<table id="customers" style="margin-left:150%;">
		<caption>TOP RANKED ROUTES</caption>
	<tr>
		<th>Destination</th>
		<th>Frequency</th>
		
		
		
	</tr>
	<tr v-for="passenger in activePassengers">
		<td>{{passenger.name}}</td>
		<td>{{passenger.email}}</td>
	</tr>
	</table>
	<br>


	
	
</div>

</template>

<style>
	

#customers{
	
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
    background-color: #0652DD;
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