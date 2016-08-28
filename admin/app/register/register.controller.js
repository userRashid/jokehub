(function() {

	'use strict';

	angular
		.module('app.register')
		.controller('RegisterController', RegisterController);

	function RegisterController(API) {

        var vm = this;
        vm.Register = function(registerData){
          API._post('register',registerData).then(function(){

          });
        }
  }

})();
