(function () {
    angular.module('jokehubApp.profile', [])
        .config(config);

    function config($stateProvider) {

        $stateProvider.state('jokehub.manageProfile', {
            url: '/manage-profile',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/profile/profile.html',
                    controller: 'ProfileController as vm'
                }
            }
        });
    };
})();