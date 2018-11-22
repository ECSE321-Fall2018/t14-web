export default {


data: function(){
        return {
        search: '',
        customers: [
          { id: '1', name: 'Jhon Snow', profile_pic: 'https://i.stack.imgur.com/CE5lz.png'},
          { id: '2', name: 'Deanerys Targarian', profile_pic: 'https://i.stack.imgur.com/CE5lz.png'},
          { id: '3', name: 'Jaime Lanister', profile_pic: 'https://i.stack.imgur.com/CE5lz.png'},
          { id: '4', name: 'Tyron Lanister', profile_pic: 'https://i.stack.imgur.com/CE5lz.png'}
        ]};
},
computed:
{
    filteredCustomers:function()
    {
         var self=this;
       return this.customers.filter(function(cust){return cust.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
       //return this.customers;
    }
}
};
