import {axios} from './http-common.js'

<template>
<div class = "Active">


	<form @submit.prevent="addSkill">
	<input type="text" placeholder="enter name" v-model="name">
	<ul>
	
		<li>{{name}}</li>
		<li><button @click="created">Backend call</button></li>

	</ul>
	
	</form>

	

	<h1>This page will display the active drivers passengers and routes</h1>
	{{name}}
	
</div>
</template>


<script>
	export default {
		data() {
			return {
				name: '',
				names: [
				{"name":"bob"},
				{"name":"petu"}
				]
				console.log("hi");

			}
		}
	}
	
  
	
</script>
<script src="./registration.js"></script>

<style scoped>
h1 {
	font-family: "Times New Roman";
}

</style>