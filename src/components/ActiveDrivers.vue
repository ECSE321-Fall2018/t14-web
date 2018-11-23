
<template>

<div id="main">
	<h1>Drivers</h1>


	Filter: <input type="text" id="filter" v-model="search"/>   

	Filter: <input type="text" id="filter2" v-model="search2"/>   
	 <input type="text" v-model="search" size="60" style="width: 500px; height: 40px;" 
		placeholder="search active drivers..."  />  
	

	

	

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
	font-size: 20px;
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

