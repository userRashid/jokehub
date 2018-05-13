(function () {
    'use strict';

    angular
        .module('jokehubApp.user')
        .controller('ManageUserController', _ManageUserController);

    _ManageUserController.$inject = ['UserService'];

    function _ManageUserController(UserService) {

        var vm = this;

        function Onint() {
            UserService.getAllUser().then(function (response) {
                vm.users = response.data;
            });
        }

        Onint();

        vm.viewUser = function (data) {
            vm.viewData = data;
        }
    }
})();