<template>
<div class = "nav">
	<h1>Navigation</h1>
	<nav>
		<router-link to="/active">Active</router-link>
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
					text: 'yyet',
					page:'/Active'
				}
				]
			}
		}
	}
</script>