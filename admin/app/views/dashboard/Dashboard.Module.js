(function () {
    angular.module('jokehubApp.dashboard', ['chart.js'])
        .config(config);

    function config($stateProvider) {

        $stateProvider.state('jokehub.dashboard', {
            url: '/dashboard',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/dashboard/dashboard.html',
                    controller: 'DashboardController as vm'
                }
            }
        });
    };
})();