(function () {
    angular.module('jokehubApp.signup', [])
        .config(config);

    function config($stateProvider) {

        $stateProvider.state('jokehub.signup', {
            url: '/signup',
            views: {
                'jokehub@': {
                    templateUrl: 'app/core/default.html'
                },
                'content@jokehub.signup': {
                    templateUrl: 'app/views/signup/signup.html',
                    controller: 'SignupController as vm'
                }
            }
        });
    }
})();