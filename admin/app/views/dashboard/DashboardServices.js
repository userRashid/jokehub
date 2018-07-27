(function () {
    'use strict';

    angular
        .module('jokehubApp.dashboard')
        .factory('DashboardServices', _DashboardServices);

    _DashboardServices.$inject = ['Http'];

    function _DashboardServices(_http) {
        return {
            getAnalytics: _getAnalytics
        }

        function _getAnalytics() {
            return _http._get('analytical');
        }
    }
})();