<template>
<div class = "Active">


	<form @submit.prevent="addSkill">
	<input type="text" placeholder="enter name" v-model="name">
	
	</form>

	<ul>
		<li v-for="(data,index) in skills" :key='index'>{{data.skill}}</li>
		<li>{{name}}</li>
		<li>ni</li>
	</ul>

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

			}
		},
		methods: {
			addSkill() {
				this.skills.push({skill: this.skill})
				this.skill = '';
			}
		}
	}
</script>

<style scoped>
h1 {
	font-family: "Times New Roman";
}

</style>