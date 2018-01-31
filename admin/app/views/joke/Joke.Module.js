(function () {
    angular.module('jokehubApp.joke', [])
        .config(config);

    function config($stateProvider) {

        $stateProvider.state('jokehub.addJoke', {
            url: '/add-joke',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/joke/add-joke/add-joke.html',
                    controller: 'AddJokeController as vm'
                }
            }
        }).state('jokehub.manageJoke', {
            url: '/manage-joke',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/joke/manage-joke/manage-joke.html',
                    controller: 'ManageJokeController as vm'
                }
            }
        });
    };
})();