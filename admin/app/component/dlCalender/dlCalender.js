(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('dlCalender', _dlCalender);

    _dlCalender.$inject = [];

    function _dlCalender() {
        return {
            restrict: 'A'
            , controller: controller
            , controllerAs: 'vm'
            , templateUrl: 'app/component/dlCalender/dlCalender.html'
            , scope: {
                data: '=dlCalender'
            }
        }

        function controller($scope) {
            var vm = this;
            vm.dateOptions = {
                formatYear: 'yy',
                maxDate: new Date(),
                startingDay: 1,
                showWeeks: false
            };
            vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            vm.format = vm.formats[0];
            vm.popup1 = {
                opened: false
            };
            vm.open1 = function () {
                vm.popup1.opened = true;
            };
        }
    }
})();