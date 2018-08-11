(function () {
    'use strict';

    angular
        .module('jokehubApp.user')
        .controller('UserDetailController', _UserDetailController);

    _UserDetailController.$inject = ['UserService', '$stateParams'];

    function _UserDetailController(UserService, $stateParams) {

        var vm = this;
        var userId = $stateParams.userId;

        function Onint() {
            UserService.getUserDetails(userId).then(function (response) {
                vm.userDetails = response.data;
            });
        }

        Onint();

    }
})();