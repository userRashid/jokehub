(function() {

    'use strict';

    angular
        .module('app.topbar')
        .controller('TopbarController', TopbarController);

    /** @ngInject */
    function TopbarController(Session, Login, $state) {

        var vm = this;
        vm.userName = Session.get('name');
        vm.logout = function(){
          Login.logout();
          $state.go('app.login');
        }

    }

})();
