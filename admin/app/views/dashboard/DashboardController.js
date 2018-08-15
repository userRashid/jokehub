(function () {
    'use strict';

    angular
        .module('jokehubApp.dashboard')
        .controller('DashboardController', _DashboardController);

    _DashboardController.$inject = ['DashboardServices'];

    function _DashboardController(DashboardServices) {
        var vm = this;

        function OnInit() {
            DashboardServices.getAnalytics().then(function (response) {
                vm.analyticalData = response.data.analyticalData;
            });
        }

        OnInit();
    }
})();