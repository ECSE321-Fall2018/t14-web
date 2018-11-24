

import axios from 'axios'
var config = require('../../config')

//var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
//var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var Axios = axios.create({

  baseURL: 'https://karpool-spring-14.herokuapp.com/',
  headers: { 'Access-Control-Allow-Origin': 'localhost:8087/'}
  
})



export default {
  
  data () {
    return {
      search: '',
      activeTrips: ["Active Trips: "],
      topRoutes: [],
      activeDrivers: [],
      tripDestination: [],
      activePassengers: [],
      tripsIn: [],
      response: [],
      customers: [],
      startDate: "20180101",
      endDate: "20190101",
      completeDrivers: [],
      completePassengers: [],
      completeRoutes: []
    }
  },



methods: {
/**takes a start and end date in the form of a string and calls backend methods to deliver 
all completed trips in the time frame
**/
getIntervalTrips: function (startDate, endDate) { 
  var vm = this
  this.startDate = startDate
  this.endDate = endDate
  var parameter = 'trips/date/' + startDate+ '/' + endDate

  if (vm.tripsIn.length > 0) {
    vm.tripsIn = []
  }
  Axios.get(parameter)
  .then(response => {

    
    for (var i = 0; i < response.data.length; i++) {
      if (response.data[i].tripComplete = true) {
        vm.tripsIn.push(response.data[i])
      }
    }
    
  })
  .catch(e => {
    vm.errorParticipant = e;
  });
},

getTopDrivers: function () {
  // Initializing participants from backend
    var vm = this
    
    Axios.get('/drivers/top3')
    .then(response => {
      if (vm.activeDrivers.length > 0) {
          vm.activeDrivers = []
      }
      for (var i = 0; i < response.data.length; i++) {
        
        vm.activeDrivers.push(response.data[i])
        
      }

      

      
    })
    .catch(e => {
      vm.errorParticipant = e;
    });
},
getTopPassengers: function () {
  // Initializing participants from backend
    var vm = this
    
    Axios.get('/passengers/top3')
    .then(response => {
      if (vm.activePassengers.length > 0) {
          vm.activePassengers = []
      }
      for (var i = 0; i < response.data.length; i++) {
        
        vm.activePassengers.push(response.data[i])
        
      }

      

      
    })
    .catch(e => {
      vm.errorParticipant = e;
    });
},
getTopDestinations: function () {
  // Initializing participants from backend
    var vm = this
    
    Axios.get('trips/destination/top3')
    .then(response => {
      
      if (vm.topRoutes.length > 0) {
          vm.topRoutes = []
      }
        vm.topRoutes = response.data
        console.log(reponse.data)
      })


    .catch(e => {
      vm.errorParticipant = e;
    });
},

frequency: function(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return [a, b];
},

    filteredPassenger: function()
    {
    
    
         
       return activePassengers.filter(function(cust){return cust.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
       //return this.customers;
    },
    filteredDriver: function()
    {
    
    
         
       return customers.filter(function(cust){return cust.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
       //return this.customers;
    },
    filteredCustomers: function()
    {
    
    
         
       return customers.filter(function(cust){return cust.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
       //return this.customers;
    },

    check: function(){
      
    document.getElementById("male").checked = true;
    },
    uncheck: function() {
    document.getElementById("female").checked = false;
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

},
beforeMount () {
  this.getTopPassengers()
  this.getTopDrivers()
  this.getTopDestinations()
  
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

