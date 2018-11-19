<template>
<div class = "nav">
	<h1>Navigation</h1>
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
		}
	}
</script>