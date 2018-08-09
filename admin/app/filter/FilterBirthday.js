(function () {
    'use strict';

    angular
        .module('jokehubApp.filter')
        .filter('ageFilter', _ageFilter);

    _ageFilter.$inject = [];

    function _ageFilter() {
        function calculateAge(birthday) {
            if (birthday) {
                var ageDifMs = Date.now() - new Date(birthday).getTime();
                var ageDate = new Date(ageDifMs);
                return Math.abs(ageDate.getUTCFullYear() - 1970);
            } else {
                return 'N/A';
            }

        }

        return function (birthdate) {
            return calculateAge(birthdate);
        };
    }
})();