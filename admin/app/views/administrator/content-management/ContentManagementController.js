(function () {
    'use strict';

    angular
        .module('jokehubApp.administrator')
        .controller('ContentManagementController', _ContentManagementController);

    _ContentManagementController.$inject = ['AdministratorService'];

    function _ContentManagementController(AdministratorService) {
        var vm = this;

        function OnInit() {
            AdministratorService.getAllReasons().then(function (response) {
                vm.rejectReason = response.data;
            })
        }

        OnInit();

        vm.addRejectReason = function () {
            vm.addRejectReasonModel.getModel().then(function (rejectModel) {
                AdministratorService.createRejectReason(rejectModel);
            });
        }
    }
})();