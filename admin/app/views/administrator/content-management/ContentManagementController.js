(function () {
    'use strict';

    angular
        .module('jokehubApp.administrator')
        .controller('ContentManagementController', _ContentManagementController);

    _ContentManagementController.$inject = ['AdministratorService'];

    function _ContentManagementController(AdministratorService) {
        var vm = this;
        vm.isUpdate = false;
        let editData = '';
        function OnInit() {
            AdministratorService.getAllReasons().then(function (response) {
                vm.rejectReason = response.data;
            });
        }

        OnInit();

        vm.add = function () {
            vm.isUpdate = false;
        }

        vm.addRejectReason = function () {
            vm.addRejectReasonModel.getModel().then(function (rejectModel) {
                AdministratorService.createRejectReason(rejectModel);
            });
        }

        vm.edit = function (data) {
            vm.isUpdate = true;
            editData = data;
            vm.addRejectReasonModel.setModel(data);
        }

        vm.updateRejectReason = function () {
            vm.addRejectReasonModel.getModel().then(function (rejectModel) {
                rejectModel.id = editData.id;
                AdministratorService.updateRejectReason(rejectModel);
            });
        }
    }
})();