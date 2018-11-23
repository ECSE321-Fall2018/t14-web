
<template>

<div id="main">
	<button v-on:click="getTrips()">clikc</button>
Filter: <input type="text" v-model="search"/> 
<ul>  
<li v-for="customer in customers">{{customer.departureDate}}</li>
</ul>
<!--
 <span><img style="max-width:60px" :src="customer.profile_pic" class="profile-pic"  /></span>
-->

</div>
</div>

</template>


<script src="../javascript/search.js"></script>
