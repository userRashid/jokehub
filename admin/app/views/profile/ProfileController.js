(function () {
    'use strict';

    angular
        .module('jokehubApp.profile')
        .controller('ProfileController', _ProfileController);

    _ProfileController.$inject = ['ProfileServices'];

    function _ProfileController(ProfileServices) {
        var vm = this;

        function OnInit() {
            ProfileServices.getAnalytics().then(function (response) {
                vm.analyticalData = response.data.analyticalData;
            });
        }

        OnInit();

    }
})();