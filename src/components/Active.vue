import {axios} from './http-common.js'

<template>
<div class = "Active">


	<form @submit.prevent="addSkill">
	<input type="text" placeholder="enter name" v-model="name">
	<ul>
	
		<li>{{name}}</li>
		<li><button @click="get">Backend call</button></li>

	</ul>
	
	</form>

	

	<h1>This page will display the active drivers passengers and routes</h1>
	{{name}}
	
</div>
</template>


<script>
	export default {
		name: 'Active'
		}
			
	
  
	
</script>

/*<script src="./registration.js"></script>*/

<style scoped>
h1 {
	font-family: "Times New Roman";
}

</style>