(function () {
    'use strict';

    angular
        .module('jokehubApp.earning')
        .controller('EarningController', _EarningController);

    _EarningController.$inject = ['EarningServices'];

    function _EarningController(EarningServices) {
        var vm = this;

        function OnInit() {
            EarningServices.getEarning().then(function (_data) {
                vm.earning = _data.data;
            });
        }

        OnInit();
    }
})();