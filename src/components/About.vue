<template>
<!--style="color:red-->
	
	<div class="Overview">
		<!-- <h1>Overview of Passengers and Drivers</h1> -->
		<p style="color:pink"> we r a mess :) </p>



        <input type="text" placeholder="Participant Name">
        <button v-on:click="getTrips()">List Trips</button>
        <p>Active Trips</p>


		<span v-if="activeTrips">{{activeTrips}} </span>




        
		
	<br>


        
	</div>


</template>

<script src='../javascript/registration.js'></script>



