<template>
  <div id="eventregistration">
    <h2>Participants</h2>
    <table>
      <tr>
          <td>John</td>
          <td>Event to attend</td>
      </tr>
      <tr>
          <td>
              <input type="text" placeholder="Participant Name">
          </td>
          <td>
              <button>Create</button>
          </td>
      </tr>
    </table>
    <table>
  <tr v-for="participant in participants" >
      <td>{{ participant.name }}</td>
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
        <input type="text" v-model="newParticipant" placeholder="Participant Name">
    </td>
    <td>
        <button @click="created()" >Create Participant</button>
    </td>
  </tr>
</table>
<span v-if="errorParticipant" style="color:red">Error: {{errorParticipant}} </span>

    <p>
      <span style="color:red">Error: Message text comes here</span>
    </p>
  </div>
</template>

<style>
  #eventregistration {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
</style>

<script src="./registration.js"></script>
