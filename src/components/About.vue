<template>

	
	<div class="about">
		<h1>About us</h1>
        <input type="text" v-model="newParticipant" placeholder="Participant Name">
        <button v-on:click="getTrips()">Create Participant</button>
	<span v-if="activeTrips" style="color:red">{{activeTrips}} </span>
	</div>


</template>

<script>
	export default {
		name:'About'
	}
</script>

<script src="./registration.js"></script>