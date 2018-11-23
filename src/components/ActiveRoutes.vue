<template>
<!--style="color:red-->
	
	<div class="Overview">
		<!-- <h1>Overview of Passengers and Drivers</h1> -->
		<p style="color:pink"> we r a mess :) </p>



        <input type="text" placeholder="Participant Name">
        <button v-on:click="getOpenTrips()">List Trips</button>
        <p>Active Trips</p>


		<!-- <span v-if="activeTrips">{{activeTrips}} </span>
		-->

		<table id="customers">
		<tr>
	<!--	<th>Driver</th> -->
		<th>Trip ID</th>
		<th>Location</th>
		<th>Destination</th>
		<th>Depart Date</th>
		<th>Depart Time</th>
		</tr>
		<tr v-for="trip in activeTrips">
		<!-- <td>{{trip.driver}}</td> -->
		<td>{{trip.tripId}}</td>
		<td>{{trip.departureLocation}}</td>
		<td>{{trip.destination}}</td>
		<td>{{trip.departureDate}}
		<td>{{trip.departureTime}}</td>


		</tr>
		</table>




        
		
	<br>


        
	</div>


</template>

<style>
#customers {
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

</style>

<script src='../javascript/OpenRoutes.js'></script>



