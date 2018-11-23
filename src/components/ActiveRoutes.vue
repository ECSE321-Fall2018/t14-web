<template>
<!--style="color:red-->
	
	<div class="Overview">
		<!-- <h1>Overview of Passengers and Drivers</h1> -->
		


        <input type="text" placeholder="Search by Destination" v-model="search"/>

        
        


		<!-- <span v-if="activeTrips">{{activeTrips}} </span>
		-->

		<table id="customers">
			<caption>ACTIVE TRIPS</caption>
		<tr>
	<!--	<th>Driver</th> -->
		<th>Trip ID</th>
		<th>Location</th>
		<th>Destination</th>
		<th>Depart Date</th>
		<th>Depart Time</th>
		</tr>
		<tr v-for="trip in filteredTrips">
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
    width: 60%;
}

#customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    background-color: #0652DD;
    color: white;
    font-size: 10px;
}

</style>

<script src='../javascript/OpenRoutes.js'></script>



