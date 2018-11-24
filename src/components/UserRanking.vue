<template>

<div id="main">

	 
	<h1>Rankings</h1>
  	

<input type="text2" id="q" placeholder="Start Date (YYYYMMDD)" v-model="startDate"/>
<input type="text2" id="q2" placeholder="End Date (YYYYMMDD)" v-model="endDate"/>
<button v-on:click="getIntervalTrips(startDate, endDate)">Retrieve Trips</button>

	

<div class="Trips">
	<table id="customers" >
		<caption>ACTIVE TRIPS</caption>
	<tr>
		<th>Trip ID</th>
		<th>Location</th>
		<th>Destination</th>
		<th>Depart Date</th>
		<th>Depart Time</th>
		
	</tr>
	<tr v-for="trip in tripsIn">
		<td>{{trip.tripId}}</td>
		<td>{{trip.departureLocation}}</td>
		<td>{{trip.destination}}</td>
		<td>{{trip.departureDate}}
		<td>{{trip.departureTime}}</td>


	</tr>
	<br>
	</table>
</div>


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
		<th>Rank</th>
		<th>Destination</th>
		
		
		
	</tr>
	<tr v-if="topRoutes">
		<tr>
		<td>1</td>
		<td>{{topRoutes.first}}</td>
	</tr>
	<tr>
		<td>2</td>
		<td>{{topRoutes.second}}</td>
	</tr>
	<tr>
		<td>3</td>
		<td>{{topRoutes.third}}</td>
	</tr>
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
    font-size: 10px;
}

.RouteTable {
	position: absolute;
	left: 900px;
	//visibility: hidden;
}
.DriverTable {
	position: absolute;
	left: -300px;
	//visibility: hidden;

}
.PassengerTable {
	position: absolute;
	left: 500px;
	//visibility: hidden;
	
}
.Trips {
	position: absolute;
	left: 100px;

}




</style>

<script>
	export default {
		name: 'UserRanking'
	}
	

</script>


<script src='../javascript/rankings.js'></script>