
<template>

<div id="main">

<!--
	Filter: <input type="text" id="filter3" placeholder="Search Passengers" v-model="passengersearch"/>     
	
	Filter: <input type="text" id="filter2" placeholder="Search Trips" v-model="search2"/>

	Filter: <input type="text" id="filter" placeholder="Search Drivers" v-model="search"/> -->


<div class="drivers">
	<table id="customers">
	<tr>
		<th></th>
		<caption>Filter: <input type="text" id="filter" placeholder="Search Drivers" v-model="search"/></caption>
		<th></th>
		<th></th>
	</tr>
	<tr>
		<th>Driver</th>
		<th>Email</th>
		<th>Phone</th>
		<th>Trips</th>
		
	</tr>
	<tr v-for="driver in filteredCustomers">
		<td>{{driver.name}}</td>
		<td>{{driver.email}}</td>
		<td>{{driver.phoneNumber}}</td>
		<td>{{driver.trips}}</td>

	</tr>
	</table>
</div>



<div class="passengers">
<table id="customers" >
	<tr>
		<th></th>
	<caption>Filter: <input type="text" id="filter3" placeholder="Search Passengers" v-model="passengersearch"/> </caption>
	<th></th>
</tr>
	<tr>
		<th>Passenger</th>
		<th>Email</th>
		<th>Phone</th>
	</tr>
	<tr v-for="passenger in filteredPassengers">
		<td>{{passenger.name}}</td>
		<td>{{passenger.email}}</td>
		<td>{{passenger.phoneNumber}}</td>
	</tr>
	</table>
</div>

<div class="trips">
	<table id="customers">
		<tr>
			<th></th>
			<th></th>
		<caption style="align-content: top;">Filter: <input type="text" id="filter2" placeholder="Search Trips" v-model="search2"/></caption>
		<th></th>
			<th></th>
	</tr>
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
   	font-size: 12px;
}

.drivers {
	position: absolute;
	left: 900px;
}
.passengers {
	position: absolute;
	left: -300px;

}
.trips {
	position: absolute;
	left: 300px;

	
}






</style>


<script>


	export default {
		data () {
			
		}
		
	}
	

</script>


<script src="../javascript/ActiveParticipants.js"></script>

