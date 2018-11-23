<!--
<template>
	
	<div class="ActiveDrivers">
		<h1>Active Drivers</h1>
		<br>
		

		<table id="tags">
			<tr v-for="driver in activeDrivers">
				{{driver}}
			</tr>
		</table>

		<input type="text" placeholder="none">
		<button v-on:click="getDrivers()">List Current Active Drivers</button>
		
		<span v-if="activeDrivers">{{activeDrivers}}</span> 

	</div>




	</div>





</template>
-->
<template>

<div id="main">
	<input type="text" v-model="search"/>   
	<button v-on:click="getDrivers()">List Current Active Drivers</button>
	<!--
	<ul>
	<li v-for="driver in activeDrivers">
			{{driver.email}}</li>
	</ul>
-->	<input type="radio" name="gender" id="male"> Male<br>
	<input type="radio" name="gender" id="female"> Female<br>
	<input type="radio" name="gender" value="other"> Other
	<button v-on:click =" check()">yeet</button>
	
	<table id="customers">
	<tr>
		<th>Name</th>
		<th>Email</th>
		<th>Phone</th>
		<th>trips</th>
		<th>some</th>
	</tr>
	<tr v-for="driver in activeDrivers">
		<td>{{driver.name}}</td>
		<td>{{driver.email}}</td>
		<td>{{driver.phoneNumber}}</td>
		<td>{{driver.trips}}</td>

	</tr>
	</table>


	


	<span>yeeeeeeet</span>
	



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


<script>
	

	export default {
		name: "ActiveDrivers"
	}

</script>
<script>
	
</script>

<script src="../javascript/trips.js"></script>

