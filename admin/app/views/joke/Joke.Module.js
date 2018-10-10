(function () {
    angular.module('jokehubApp.joke', [])
        .config(config);

    function config($stateProvider) {

        var addJoke = {
            name: 'jokehub.addJoke',
            url: '/add-joke',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/joke/add-joke/add-joke.html',
                    controller: 'AddJokeController as vm'
                }
            }
        };

        var manageJoke = {
            name: 'jokehub.manageJoke',
            url: '/manage-joke',
            abstract: true,
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/joke/manage-joke/manage-joke.html',
                    controller: 'ManageJokeController as vm'
                }
            }
        };

        var approvedJoke = {
            name: 'jokehub.manageJoke.approved',
            url: '/approved',
            templateUrl: 'app/views/joke/manage-joke/approved/approved.html',
            controller: 'ApprovedJokeController as vm'
        };

        var pendingJoke = {
            name: 'jokehub.manageJoke.pending',
            url: '/pending',
            templateUrl: 'app/views/joke/manage-joke/pending/pending.html',
            controller: 'PendingJokeController as vm'
        };

        var rejectedJoke = {
            name: 'jokehub.manageJoke.rejected',
            url: '/rejected',
            templateUrl: 'app/views/joke/manage-joke/rejected/rejected.html',
            controller: 'RejectedJokeController as vm'
        }


        $stateProvider
            .state(addJoke)
            .state(manageJoke)
            .state(approvedJoke)
            .state(pendingJoke)
            .state(rejectedJoke);
    };
})();