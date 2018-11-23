
<template>

<div id="main">

	Filter: <input type="text" id="filter" v-model="search"/>   

	Filter: <input type="text" id="filter2" v-model="search2"/>   
	

	<table id="customers">
	<tr>
		<th>Name</th>
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


<table id="customers" style="margin-left:150%;" >
	<tr>
		<th>Name</th>
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

<script src="../javascript/ActiveDrivers.js"></script>

