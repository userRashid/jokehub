(function () {
    'use strict';

    angular
        .module('jokehubApp.dashboard')
        .factory('DashboardServices', _DashboardServices);

    _DashboardServices.$inject = ['Http'];

    function _DashboardServices(_http) {
        return {
            getAnalytics: _getAnalytics,
            getRecent: _getRecent
        }

        function _getAnalytics() {
            return _http._get('analytical');
        }

        function _getRecent() {
            return _http._get('content/recent');
        }
    }
})();