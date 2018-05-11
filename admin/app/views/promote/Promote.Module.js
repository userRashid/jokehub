(function () {
    angular.module('jokehubApp.promote', [])
        .config(config);

    function config($stateProvider) {

        $stateProvider.state('jokehub.promote', {
            url: '/promote',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/promote/promote.html',
                    controller: 'PromoteController as vm'
                }
            }
        });
    }
})();