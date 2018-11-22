<template>
  <div id="tester">
    <h2>Participants</h2>
    <table>
      <tr>
          <td>John</td>
          <td>Event to attend</td>
      </tr>
      <tr>
          <td>
              <input type="text" placeholder="Participant Name" >
          </td>
          <td>
              <button>Create</button>
          </td>
      </tr>
    </table>
    <table>
  <tr v-for="participant in participants" >
      <td>{{participant.name}}</td>
      <td>
        <ul>
          <li v-for="event in participant.events">
            {{event.name}}
          </li>
        </ul>
      </td>
  </tr>
<!-- Input field and button should be kept here -->
</table>
<table>
  <!-- Table with dynamic content -->
  <tr>
    <td>
        <input type="text" placeholder="Participant Name">
    </td>
    <td>
        <button v-on:click="getDrivers()">Create Participant</button>
    </td>
  </tr>
</table>
<span v-if="activeDrivers">{{activeDrivers}}</span>


    <p>
      <span style="color:red"></span>
    </p>
  </div>
</template>

<style>
  #tester{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
</style>

<script src="./registration.js"></script>

<script>
  export default {
    name: 'test'
  }
</script>




