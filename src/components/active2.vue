<template>
	<div class="activepassengers">
		<h1>passengers</h1>
		<input type="text" v-model="search" size="60" style="width: 500px; height: 40px;" 
		placeholder="search active passengers..."  />
		
	</div>
</template>




<script>
	export default {
		
		data()
		{
			return {
			passengers: [],
			search: ''
		}
			},
			name:'active2'

		


	}
</script>