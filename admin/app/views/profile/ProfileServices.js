(function () {
    'use strict';

    angular
        .module('jokehubApp.profile')
        .factory('ProfileServices', _ProfileServices);

    _ProfileServices.$inject = ['Http'];

    function _ProfileServices(_http) {
        return {
            getAnalytics: _getAnalytics
        }

        function _getAnalytics() {
            return _http._get('analytical');
        }
    }
})();