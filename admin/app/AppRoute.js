(function () {

    'use strict';

    angular
        .module('jokehubApp')
        .config(_routeConfig);

    function _routeConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('jokehub', {
                abstract: true,
                views: {
                    'jokehub@': {
                        templateUrl: 'app/core/content.html'
                    },
                    'topbar@jokehub': {
                        templateUrl: 'app/navigation/header/header.html',
                        controller: 'HeaderController as vm'
                    },
                    'sidebar@jokehub': {
                        templateUrl: 'app/navigation/sidebar/sidebar.html',
                        controller: 'SidebarController as vm'
                    }
                }
            });
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }

})();
