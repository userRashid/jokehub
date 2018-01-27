(function () {
    angular.module('jokehubApp.login', [])
        .config(config);

    function config($stateProvider) {

        $stateProvider.state('jokehub.login', {
            url: '/login',
            views: {
                'jokehub@': {
                    templateUrl: 'app/core/default.html'
                },
                'content@jokehub.login': {
                    templateUrl: 'app/views//login/login.html',
                    controller: 'LoginController as vm'
                }
            }
        });
    }
})();