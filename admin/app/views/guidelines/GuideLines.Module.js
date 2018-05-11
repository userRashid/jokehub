(function () {
    angular.module('jokehubApp.guidelines', [])
        .config(config);

    function config($stateProvider) {

        $stateProvider.state('jokehub.guideLines', {
            url: '/guidelines',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/guidelines/guidelines.html',
                    controller: 'GuideLinesController as vm'
                }
            }
        });
    };
})();