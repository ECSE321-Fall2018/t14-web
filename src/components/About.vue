<template>

	
	<div class="about">
		<h1>About us</h1>
        <input type="text" v-model="newParticipant" placeholder="Participant Name">
        <button v-on:click="getTrips()">List Trips</button>
        <p style="white-space: pre-line;">Active Trips</p>
		<span v-if="activeTrips" style="color:red">{{activeTrips}} </span>

        <input type="text" v-model="newPassenger" placeholder="Participant Name">
        <button v-on:click="getDrivers()">List Drivers</button>
		<span v-if="activeDrivers" style="color:red">{{activeDrivers}} </span>

		<span>Multiline message is:</span>
		<textarea v-model="message" placeholder="add multiple lines"></textarea>
	<p style="white-space: pre-line;">{{message}}</p>
	<br>


        
	</div>


</template>

<script>
	export default {
		name:'About'
	}
</script>

<script src="./registration.js"></script>