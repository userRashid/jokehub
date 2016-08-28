(function() {

    'use strict';

    angular
        .module('app.topbar')
        .controller('TopbarController', TopbarController);

    /** @ngInject */
    function TopbarController(Session) {

        var vm = this;
        vm.userName = Session.get('name');

    }

})();
