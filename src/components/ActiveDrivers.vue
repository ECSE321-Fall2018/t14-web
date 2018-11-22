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
<button v-on:click="filteredCustomers(getCustomers())">List Current Active Drivers</button>
<span v-for="customer in customers">{{customer.name}}</span>
<span>yeeeeeeet</span>
<span>(filteredCustomers)"</span>
<div v-for="customer in filteredCustomers">
	{{customer}}
 <span><img style="max-width:60px" :src="customer.profile_pic" class="profile-pic" /></span>
 <span>{{customers.name}}</span>
</div>
</div>

</template>


<script>
	

	export default {
		name: "ActiveDrivers"
	}

</script>

<script src="../javascript/trips.js"></script>

