<template>
<div class = "nav">

	<h1>Navigation</h1>
	<form @submit.prevent="addSkill">
	<input type="text" placeholder="enter" v-model="skill">
	</form>
	{{skill}}
	<nav>
		<router-link v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
	</nav>
</div>
</template>

<script>
	
	export default {
		name: 'nav',
		data () {
			return {
				skill: "",
				links: [
				{
					id:0,
					text: 'Active',
					page:'/Active'
				},
				{
					id:1,
					text: 'Ranking',
					page: '/Ranking'
				},
				{
					id:2,
					text: 'HelloWorld',
					page: '/HelloWorld'
				}
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


.nav {
	font-family: 'Raleway', sans-serif;
	display: inline-block;
	margin-left: 70px;
	padding-top: 25px;
	text-transform: uppercase;
	text-decoration: none;
	color: #444;
	font-weight: 700;


}


</style>