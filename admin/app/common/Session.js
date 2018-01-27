(function () {
    'use strict';

    angular
        .module('jokehubApp.common')
        .factory('Session', _Session);

    _Session.$inject = [];

    function _Session() {
        return {
            set: _set,
            get: _get,
            clear: _clear
        }

        function _set(_k, _v) {
            sessionStorage.setItem(_k, _v);
        }

        function _get(_v) {
            return sessionStorage.getItem(_v);
        }

        function _clear() {
            return sessionStorage.clear();
        }
    }
})();