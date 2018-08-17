(function () {
    'use strict';

    angular
        .module('jokehubApp.earning')
        .controller('EarningController', _EarningController);

    _EarningController.$inject = ['EarningServices'];

    function _EarningController(EarningServices) {
        var vm = this;
        vm.model = {};

        vm.labels = ["January", "February", "March", "April", "May", "June", "July", "Aug", "Sept", "Nov", "Dec"];
        vm.series = ['2018', '2019'];
        vm.data = [
            [65, 59, 80, 81, 56, 55, 40, 45, 85, 120, 250, 230],
            [28, 48, 40, 250, 86, 27, 90, 65, 59, 80, 81, 56]
        ];

        function OnInit() {
            EarningServices.getEarning().then(function (_data) {
                vm.earning = _data.data;
            });
        }

        OnInit();

        this.filter = function () {
            let year = parseInt(vm.model.year);
            let month = parseInt(vm.model.month);
            let _date = new Date(year, month, 31);
            console.log(' Date ', _date);
        }
    }
})();