(function () {
    'use strict';

    angular
        .module('jokehubApp.filter')
        .filter('ageSex', _ageSex);

    _ageSex.$inject = [];

    function _ageSex() {
        function calculateSex(sex) {
            if (sex) {
                return sex == '1' ? 'Male' : sex == '2' ? 'Female' : 'N/A';
            } else {
                return 'N/A';
            }

        }

        return function (sex) {
            return calculateSex(sex);
        };
    }
})();