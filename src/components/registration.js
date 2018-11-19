function ParticipantDto (name) {
  this.name = name
  this.events = []
}

function EventDto (name, date, start, end) {
  this.name = name
  this.eventDate = date
  this.startTime = start
  this.endTime = end
}

import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://eventregistration-backend-123.herokuapp.com/participants'

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})



export default {
  name: 'eventregistration',
  data () {
    return {
      participants: [],
      newParticipant: '',
      errorParticipant: '',
      response: []
    }
  },
  created: function () {
  AXIOS.get(`/participants`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.participants = response.data
    })
    .catch(e => {
      this.errorParticipant = e;
    });
},
methods: {
  createParticipant: function (participantName) {
  AXIOS.post(`/participants/`+participantName, {}, {})
  .then(response => {
    // JSON responses are automatically parsed.
    this.participants.push(response.data)
    this.newParticipant = ''
    this.errorParticipant = ''
  })
  .catch(e => {
    var errorMsg = e.message
    console.log(errorMsg)
    this.errorParticipant = errorMsg
  });
}
}
}