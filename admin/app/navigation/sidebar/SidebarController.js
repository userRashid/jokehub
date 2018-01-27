(function () {
    'use strict';

    angular
        .module('jokehubApp.navigation')
        .controller('SidebarController', _SidebarController);

    _SidebarController.$inject = ['$location'];

    function _SidebarController($location) {
        var vm = this;
        vm.isSelected = function (path) {
            return $location.path() === '/' + path ? 'active' : '';
        }
    }

})();