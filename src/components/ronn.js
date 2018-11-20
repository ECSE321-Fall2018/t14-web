
		var vm = new Vue({
			el: '#app',
			data: {
				status: ''
			},

			data () {
    return {
      participants: [],
      newParticipant: '',
      errorParticipant: '',
      response: []
    }
  },



		created: function () {
			this.loadQuote();
		},

		
		loadQuote: function(){
			this.status = 'Loading';
			var vm=this;
			axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
			.then(response => {
				vm.status = response.data[0];
			})
				
		}
		
		
		});


		