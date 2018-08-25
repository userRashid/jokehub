(function () {
    angular.module('jokehub.forgotPassword', [])
        .config(config);

    function config($stateProvider) {

        $stateProvider.state('jokehub.forgotPassword', {
            url: '/forgot-password',
            views: {
                'jokehub@': {
                    templateUrl: 'app/core/default.html'
                },
                'content@jokehub.forgotPassword': {
                    templateUrl: 'app/views/forgot-password/forgot-password.html',
                    controller: 'ForgotPasswordController as vm'
                }
            }
        });
    }
})();