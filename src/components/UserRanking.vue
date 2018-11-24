<template>

<div id="main">

	 
	<h1>Rankings</h1>
  	
  	
	
<div class="DriverTable">
	<table id="customers" >
		<caption>TOP RANKED DRIVERS</caption>
	<tr>
		<th>Driver</th>
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
		<th>Passenger</th>
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
	
#customers {
	position: absolute;
    font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td, #customers th {
    border: transparent;
    padding: 8px;
    line-height: 100px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
    padding-top: 2px;
    padding-bottom: 2px;
    text-align: center;
    background-color: #0652DD;
    border: none;
    color: white;
    font-size: 15px;
}

.RouteTable {
	position: absolute;
	left: 900px;
}
.DriverTable {
	position: absolute;
	left: -300px;

}
.PassengerTable {
	position: absolute;
	left: 300px;
	
}




</style>

<script>
	export default {
		name: 'UserRanking'
	}
	

</script>


<script src='../javascript/rankings.js'></script>