(function() {

    'use strict';

    angular
        .module('app.category', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {

        $stateProvider.state('app.category', {
            url  : '/category',
            views  : {
                'content@app': {
                    templateUrl: 'app/category/category.html',
                    controller : 'CategoryController as vm'
                }
            }
        });
    }
})();
