(function() {

    'use strict';

    angular
        .module('app.category', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {

        $stateProvider.state('app.add-category', {
            url  : '/add-category',
            views  : {
                'content@app': {
                    templateUrl: 'app/category/add-category.html',
                    controller : 'CategoryController as vm'
                }
            }
        }).state('app.manage-category', {
            url  : '/manage-category',
            views  : {
                'content@app': {
                    templateUrl: 'app/category/manage-category.html',
                    controller : 'ManageController as vm'
                }
            }
        }).state('app.manage-category:id', {
            url  : '/manage-category/:categoryId',
            views  : {
                'content@app': {
                    templateUrl: 'app/category/add-category.html',
                    controller : 'CategoryController as vm'
                }
            }
        });
    }
})();
