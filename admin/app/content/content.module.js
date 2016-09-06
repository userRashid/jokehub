(function() {

    'use strict';

    angular
        .module('app.content', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {

        $stateProvider.state('app.content', {
            url  : '/content',
            views  : {
                'content@app': {
                    templateUrl: 'app/content/content.html',
                    controller : 'ContentController as vm'
                }
            }
        });
    }
})();
