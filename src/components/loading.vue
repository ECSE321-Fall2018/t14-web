import App from '../App.vue'

<template>

<div class="loading">
	<div class="logo">
		
		<img src="../img/logo.png"/>
		KAR<span>PÖÖL</span>
		
		<p style="font-size: 20px"> the North American Ride Sharing Service </p>
		
		
		<b-btn variant="primary" href="#/main" style="margin-bottom: 170px;">ENTER</b-btn>
	</div>
	<div class="loader-frame">
		
		<div class="loader1" id="loader1"></div>
		<div class="loader12" id="loader12"></div>
	</div>




</div>

</template>



<style scoped>
button {
	z-index: 200;
}
.loading {
	width: 100%;
	height:100%;
	background: #3a3e45;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 500;
}
.logo {
	widows: 300px;
	height: 70px;
	margin: 150px auto 50px auto;
	font-size: 175px;
	text-shadow: -1px 2px 2px #000;
	text-align: center;
	color: azure;
}
.loader-frame {
	width: 70px;
	height: 70px;
	margin: auto;
	position: relative;
}

img {
	height: 150px;
	width: 150px;

}
span {
	text-align: center;
	color:darkturquoise;
}

router-link {
	color: black;
}
/*
.loader1, .loader {
	position: absolute;
	border: 5px solid transparent;
	border-radius: 50%;
}
.loader1 {
	width: 70px;
	height: 70px;
	border-top: 5px solid azure;
	border-bottom: 5px solid azure;
	animation: clockwisespin 2s linear 3;
}
.loader2 {
	width: 60px;
	height: 60px;
	border-left: 5px solid darkturquoise;
	border-right: 5px solid darkturquoise;
	top: 5px; left: 5px;
	animation: anticlockwisespin 2s linear 3;
}

@keyframes clockwisespin {
	from {transform: rotate(0deg);}
	to {transform: rotate(360deg);}
}

@keyframes anticlockwisespin {
	from {transform: rotate(0deg);}
	to {transform: rotate(-360deg);}
}
@keyframes fadeout {
	from {opacity: 1;}
	to {opacity: 0;}
}
*/





</style>


<script>
	
