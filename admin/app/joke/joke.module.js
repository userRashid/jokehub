(function() {

    'use strict';

    angular
        .module('app.joke', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {

        $stateProvider.state('app.joke', {
            url  : '/joke',
            views  : {
                'content@app': {
                    templateUrl: 'app/joke/joke.html',
                    controller : 'JokeController as vm'
                }
            }
        });
    }
})();
