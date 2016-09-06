(function() {

    'use strict';

    angular
        .module('app.content', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {

        $stateProvider.state('app.add-content', {
            url  : '/add-content',
            views  : {
                'content@app': {
                    templateUrl: 'app/content/add-content.html',
                    controller : 'AddContentController as vm'
                }
            }
        }).state('app.manage-content', {
            url  : '/manage-content',
            views  : {
                'content@app': {
                    templateUrl: 'app/content/manage-content.html',
                    controller : 'ManageContentController as vm'
                }
            }
        });
    }
})();
