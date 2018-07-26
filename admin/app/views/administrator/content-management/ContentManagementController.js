(function () {
    'use strict';

    angular
        .module('jokehubApp.administrator')
        .controller('ContentManagementController', _ContentManagementController);

    _ContentManagementController.$inject = [];

    function _ContentManagementController() {
        var vm = this;

        vm.rejectReason = ['', '', ''];

    }
})();