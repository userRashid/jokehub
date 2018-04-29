(function () {
    'use strict';

    angular
        .module('jokehubApp.confirm')
        .factory('ConfirmService', _ConfirmService);

    _ConfirmService.$inject = ['Http'];

    function _ConfirmService(_http) {
        return {
            doConfirm: _doConfirm
        }

        function _doConfirm(doConfirmId) {
            var data = { id: doConfirmId };
            return _http._post('confirmemail', data);
        }
    }
})();