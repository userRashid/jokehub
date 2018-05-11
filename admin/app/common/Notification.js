(function () {
    'use strict';

    angular
        .module('jokehubApp.common')
        .factory('Notification', _Notification);

    _Notification.$inject = ['toastr'];

    function _Notification(toastr) {
        return {
            add: _add,
            notify: _notify
        }

        function _add() {
            console.log('Notification Add');
        }

        function _notify(type, title, body, options) {
            var message = { type: type, title: title, body: body, options: options };
            show(message);
            console.log('Notification notify');
        }

        function show(message) {
            switch (message.type) {
                case 'error': toastr.error(message.body, message.title, message.options); break;
                case 'warning': toastr.warning(message.body, message.title, message.options); break;
                case 'success': toastr.success(message.body, message.title, message.options); break;
                case 'info': toastr.info(message.body, message.title, message.options); break;
                default: toastr.info(message.body, message.title, message.options); break;
            }
        }
    }
})();