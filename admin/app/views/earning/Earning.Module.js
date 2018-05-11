(function () {
    angular.module('jokehubApp.earning', [])
        .config(config);

    function config($stateProvider) {

        $stateProvider.state('jokehub.manageEarning', {
            url: '/manage-earning',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/earning/earning.html',
                    controller: 'EarningController as vm'
                }
            }
        });
    };
})();