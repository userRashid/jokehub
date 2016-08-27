(function() {
     console.log('Login Called');
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(Session,Login,$state) {
        var vm = this;
        vm.Login = function(login){
          Login.login(login)
        }
    }

})();
