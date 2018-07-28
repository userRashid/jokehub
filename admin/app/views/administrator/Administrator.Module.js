(function () {
    angular.module('jokehubApp.administrator', [])
        .config(config);
    function config($stateProvider) {

        $stateProvider.state('jokehub.contentManagement', {
            url: '/content-management',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/administrator/content-management/content-management.html',
                    controller: 'ContentManagementController as vm'
                }
            }
        });
    };
})();