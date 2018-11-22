<template>
	
	<div class="ActiveDrivers">
		<h1>Active Drivers</h1>
		<br>

		<input type="text" placeholder="none">
		<button v-on:click="getDrivers()">List Current Active Drivers</button>
		<input type="button" value="Refresh Page" onClick="makeUL(activeDrivers)">
		<span v-if="activeDrivers">{{activeDrivers}}</span>

		<ul id="tags">
			<li v-repeat="tags">
				{{$activeDrivers}}
			</li>
		</ul>




	</div>





</template>

<script>
	

	export default {
		name: "ActiveDrivers"
	}

</script>

<script src="../javascript/registration.js"></script>

