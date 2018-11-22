
<template>

<div id="main">
Filter: <input type="text" v-model="search"/>   
<div v-for="customer in filteredCustomers">
 <span><img style="max-width:60px" :src="customer.profile_pic" class="profile-pic"  /></span>
 <span>{{customer.name}}</span>
</div>
</div>

</template>

<script src="../javascript/search.js"></script>
