(function () {
    'use strict';

    angular
        .module('jokehubApp.dashboard')
        .controller('DashboardController', _DashboardController);

    _DashboardController.$inject = ['DashboardServices', '$sce'];

    function _DashboardController(DashboardServices, $sce) {
        var vm = this;

        function OnInit() {
            DashboardServices.getAnalytics().then(function (response) {
                vm.analyticalData = response.data.analyticalData;
            });

            DashboardServices.getRecent().then(function (response) {
                vm.recentJoke = $sce.trustAsHtml(response.data.description);
            });
        }

        OnInit();
    }
})();