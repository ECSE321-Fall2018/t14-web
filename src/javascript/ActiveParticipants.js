
import axios from 'axios'

var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var Axios = axios.create({

  baseURL: 'https://karpool-spring-14.herokuapp.com/',
  headers: { 'Access-Control-Allow-Origin': 'localhost:8087/'}
  
})



export default {
  
  data () {
    return {
      search: '',
      search2: '',
      passengersearch: '',
      activeTrips: [],
      activeDrivers: [],
      activePassengers: [],
      response: [],
      
    }
  },


methods: {
  
getDrivers: function () {
  // Initializing participants from backend
    var vm = this
    
    Axios.get('/drivers/active/all')
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
getPassengers: function () {
  // Initializing participants from backend
    var vm = this
    
    Axios.get('/passengers/active/all')
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
{
  
    filteredCustomers:function()
    {
         var self=this;
       return this.activeDrivers.filter(function(cust){return cust.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
       //return this.customers;
    },
    filteredPassengers:function()
    {
         var self=this;
       return this.activePassengers.filter(function(cust){return cust.name.toLowerCase().indexOf(self.passengersearch.toLowerCase())>=0;});
       //return this.customers;
    },
    filteredTrips: function()
    {
         var self=this;
       return this.activeTrips.filter(function(cust){return cust.destination.toLowerCase().indexOf(self.search2.toLowerCase())>=0;});
       //return this.customers;
    },
    
},

beforeMount () {
  this.getDrivers()
  this.getPassengers()
  this.getOpenTrips();
}


  }
  

