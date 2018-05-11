(function () {
    angular.module('jokehubApp.confirm', [])
        .config(config);

    function config($stateProvider) {

        $stateProvider.state('jokehub.confirm', {
            url: '/confirm/:id',
            views: {
                'jokehub@': {
                    templateUrl: 'app/core/default.html'
                },
                'content@jokehub.confirm': {
                    templateUrl: 'app/views/confirm/confirm.html',
                    controller: 'ConfirmController as vm'
                }
            }
        });
    }
})();