import axios from 'axios'

var config = require('../../config')

//var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
//var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var Axios = axios.create({

  baseURL: 'https://karpool-spring-14.herokuapp.com/',
  headers: { 'Access-Control-Allow-Origin': 'localhost:8087/'}
  
})
export default {


data: function(){
        return {
        search: '',
        
        customers: []

};
},

methods: {
  
getTrips: function () {
  // Initializing participants from backend
    var vm = this
    
    Axios.get('/trips/all')
    .then(response => {
      if (vm.customers.length > 0) {
        vm.customers = []
      }
      for (var i = 0; i < response.data.length; i++) {
        vm.customers.push(response.data[i])
        console.log(response.data[i])
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
       return this.customers.filter(function(cust){return cust.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
       //return this.customers;
    }
    
},


};
