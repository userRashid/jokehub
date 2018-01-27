(function () {
    angular.module('jokehubApp.category', [])
        .config(config);

    function config($stateProvider) {

        $stateProvider.state('jokehub.addCategory', {
            url: '/add-category',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/category/add-category/add-category.html',
                    controller: 'AddCategoryController as vm'
                }
            }
        }).state('jokehub.manageCategory', {
            url: '/manage-category',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/category/manage-category/manage-category.html',
                    controller: 'ManageCategoryController as vm'
                }
            }
        });
    };
})();