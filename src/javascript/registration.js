

import axios from 'axios'
var config = require('../../config')

//var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
//var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var Axios = axios.create({

  baseURL: 'https://karpool-spring-14.herokuapp.com/',
  headers: { 'Access-Control-Allow-Origin': 'localhost:8087/#/ActiveDrivers'}
  
})



export default {
  
  data () {
    return {
      activeTrips: ["Active Trips: "],
      activeDrivers: ["Active Drivers: "],
      response: []
    }
  },


methods: {
  
getTrips: function () {
  // Initializing participants from backend
    var vm = this
    
    axios.get('https://karpool-spring-14.herokuapp.com/trips/all')
    .then(response => {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].tripComplete == true) {
        vm.activeTrips.push(["tripID: "+ response.data[i].tripId, "trip Price: " + response.data[i].price])
        }
      }

      
    })
    .catch(e => {
      vm.errorParticipant = e;
    });
},
getDrivers: function () {
  // Initializing participants from backend
    var vm = this
    
    axios.get('https://karpool-spring-14.herokuapp.com/drivers/all')
    .then(response => {
      if (vm.activeDrivers.length > 0) {
          vm.activeDrivers = []
      }
      for (var i = 0; i < response.data.length; i++) {
        
        vm.activeDrivers.push(response.data[i].name)
        
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

