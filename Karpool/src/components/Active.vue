<template>
<div class = "Active">
	<h1>This page will display the active drivers passengers and routes</h1>
	{{name}}
	{{working}}
</div>
</template>

<script>
	export default {
		props: [
		'name',
		'working'
		]
	}
</script>

<style scoped>
h1 {
	font-family: "Times New Roman";
}

</style>