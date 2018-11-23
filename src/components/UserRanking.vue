<template>

<div id="main">

	 
	<h1>Rankings</h1>
  	
  	<b-table striped hover: items="activeDrivers"></b-table>
	
<div class="DriverTable">
	<table id="customers" >
		<caption>TOP RANKED DRIVERS</caption>
	<tr>
		<th>Name</th>
		<th>Email</th>
		<th>Phone</th>
		
	</tr>
	<tr v-for="driver in activeDrivers">
		<td>{{driver.name}}</td>
		<td>{{driver.email}}</td>
		<td>{{driver.phoneNumber}}</td>

	</tr>
	<br>
	</table>
</div>

<div class="PassengerTable">
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
</div>


<div class="RouteTable">
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


	
	
</div>

</template>

<style>
	
.DriverTable {
	position: absolute;
top: 50%;
left: 50%;
}

.PassengerTable {
	position: absolute;
top: 50%;
left: 50%;


	}

.RouteTable {
	
position: absolute;
top: 8px;
left: -700px;


}







</style>

<script>
	export default {
		name: 'UserRanking'
	}
	

</script>


<script src='../javascript/rankings.js'></script>