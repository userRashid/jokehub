(function () {
    'use strict';

    angular
        .module('jokehubApp.confirm')
        .controller('ConfirmController', _ConfirmController);

    _ConfirmController.$inject = ['ConfirmService', '$stateParams'];

    function _ConfirmController(ConfirmService, $stateParams) {
        var vm = this;
        vm.confirmId = $stateParams.id;
        vm.isError = false;
        ConfirmService.doConfirm(vm.confirmId).then(function (response) {
            vm.isSuccess = true;
        });
    }
})();