(function () {
    'use strict';

    angular
        .module('jokehubApp.user')
        .controller('UserDetailController', _UserDetailController);

    _UserDetailController.$inject = ['UserService'];

    function _UserDetailController(UserService) {

        var vm = this;

        function Onint() {
            UserService.getUser(userId).then(function (response) {
                vm.user = response.data;
            });
        }

        //Onint();

    }
})();