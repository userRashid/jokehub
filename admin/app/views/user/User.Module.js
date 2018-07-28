(function () {
    angular.module('jokehubApp.user', [])
        .config(config);

    function config($stateProvider) {

        $stateProvider.state('jokehub.manageUser', {
            url: '/manage-user',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/user/manage-user/manage-user.html',
                    controller: 'ManageUserController as vm'
                }
            }
        }).state('jokehub.userDetail', {
            url: '/manage-user/:userId',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/user/user-detail/user-detail.html',
                    controller: 'UserDetailController as vm'
                }
            }
        });
    };
})();