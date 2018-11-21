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
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: 'https://ziptasticapi.com/90210',
  headers: { 'Access-Control-Allow-Origin': 'https://karpool-spring-14.herokuapp.com/passengers/all'}
})



export default {
  name: 'eventregistration',
  data () {
    return {
      participants: [],
      newParticipant: '',
      participantExist: '',
      errorParticipant: [],
      response: []
    }
  },

  watch : {
      newParticipant: function() {
        
        if (this.newParticipant.length > 10) {
          this.lookupParticipant()
        }

      }
    },

methods: {
  created: function () {
  // Initializing participants from backend
    var vm = this

    axios.get('https://karpool-spring-14.herokuapp.com/passengers/all')
    .then(response => {
      for (var i = 0; i < response.data.length; i++) {
        vm.errorParticipant.push(response.data[i].name)
        
      }

      
    })
    .catch(e => {
      vm.errorParticipant = e;
    });
},
getTrips: function () {
  // Initializing participants from backend
    var vm = this
    
    axios.get('https://karpool-spring-14.herokuapp.com/trips/all')
    .then(response => {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].tripComplete == true) {
        vm.errorParticipant.push(response.data[i].tripId)
        }
      }

      
    })
    .catch(e => {
      vm.errorParticipant = e;
    });
}
/*
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
  */

}
    /*
    methods: {

      lookupStartingZip: function() {
        //this.newParticipant = "Found";
        var vm = this
        //axios.get('https://karpool-spring-14.herokuapp.com/passengers/' + vm.newParticipant)
        axios.get('https://karpool-spring-14.herokuapp.com/trips/all')
        .then(function (response) {
          var arr = response[0]
          console.log("wack")
          console.log(response)

          vm.participantExist = response.status

          
        
          //vm.newParticipant = response.data.destination
          
        })
        .catch(function (error) {
          vm.participantExist = "invalid"
        })
      } 



    },
*/

  }
  



/*
methods: {
  createParticipant: function (participantName) {
  AXIOS.post(''+participantName, {}, {})
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
  */

