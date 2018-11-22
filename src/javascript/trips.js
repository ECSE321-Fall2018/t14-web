

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
      search: '',
      activeTrips: ["Active Trips: "],
      activeTripsPrice: ["Price: "],
      activeDrivers: [],
      tripDestination: [],
      response: [],
      customers: []
    }
  },


methods: {
  
getTrips: function () {
  // Initializing participants from backend
    var vm = this
    if (vm.activeTrips.length > 0) {
      vm.activeTrips = [];
      vm.activeTripsPrice = [];
    }
    axios.get('https://karpool-spring-14.herokuapp.com/trips/all')
    .then(response => {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].tripComplete == true) {
        vm.activeTrips.push(response.data[i].destination)
        vm.activeTripsPrice.push(response.data[i].price)
        }
      }

      
    })
    .catch(e => {
      vm.errorParticipant = e;
    });
},
getCustomers: function () {
  // Initializing participants from backend
    var vm = this
    
    axios.get('https://karpool-spring-14.herokuapp.com/drivers/all')
    .then(response => {
      if (vm.customers.length > 0) {
        vm.customers = []
      }
      for (var i = 0; i < response.data.length; i++) {
        
        vm.customers.push(response.data[i])
        
      }

      
    })
    .catch(e => {
      vm.errorParticipant = e;
    });
},
getDestination: function () {
  // Initializing participants from backend
    var vm = this
    
    axios.get('https://karpool-spring-14.herokuapp.com/drivers/all')
    .then(response => {
      if (vm.tripDestination.length > 0) {
        vm.tripDestination = []
      }
      for (var i = 0; i < response.data.length; i++) {
        
        vm.tripDestination.push(response.data[i].destination)
        
      }

      
    })
    .catch(e => {
      vm.errorParticipant = e;
    });
},

    filteredCustomers: function(customers)
    {
    
    
         
       return customers.filter(function(cust){return cust.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
       //return this.customers;
    }
       //return this.customers;
    




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

