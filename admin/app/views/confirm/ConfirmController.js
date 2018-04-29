(function () {
    'use strict';

    angular
        .module('jokehubApp.confirm')
        .controller('ConfirmController', _ConfirmController);

    _ConfirmController.$inject = ['ConfirmService', '$stateParams'];

    function _ConfirmController(ConfirmService, $stateParams) {
        var vm = this;
        vm.confirmId = $stateParams.id;
        console.log(vm.confirmId);
        ConfirmService.doConfirm(vm.confirmId)
    }
})();