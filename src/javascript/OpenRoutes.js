
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
      activeTripsPrice: ["Price: "],
      activeDrivers: [],
      tripDestination: [],
      response: [],
      customers: []
    }
  },


methods: {
  
getOpenTrips: function () {
  // Initializing participants from backend
    var vm = this
    if (vm.activeTrips.length > 0) {
      vm.activeTrips = [];
    }
    Axios.get('/trips/open/all')
    .then(response => {
      for (var i = 0; i < response.data.length; i++) {
        vm.activeTrips.push(response.data[i])
      }
        
      })
    .catch(e => {
      vm.errorParticipant = e;
    });

}
},

computed:
{ //2 simple filters to allow searching of passengers and drivers 
  
    filteredTrips: function()
    {
         var self=this;
       return this.activeTrips.filter(function(cust){return cust.destination.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
       //return this.customers;
    },
  },

beforeMount () {
  this.getOpenTrips()
}

}
