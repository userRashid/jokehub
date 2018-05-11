(function () {
    'use strict';

    angular
        .module('jokehubApp.earning')
        .factory('EarningServices', _EarningServices);

    _EarningServices.$inject = ['Http'];

    function _EarningServices(_http) {
        return {
            getEarning: _getEarning
        }

        function _getEarning() {
            return _http._get('earning');
        }
    }
})();