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
            abstract: true,
            url: '/manage-joke',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/joke/manage-joke/manage-joke.html',
                    controller: 'ManageJokeController as vm'
                }
            }
        }).state('jokehub.manageJoke.approved', {
            url: '/approved',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/joke/manage-joke/manage-joke.html',
                    controller: 'ManageJokeController as vm'
                },
                'managejoke@jokehub.manageJoke.approved': {
                    templateUrl: 'app/views/joke/manage-joke/approved/approved.html',
                    controller: 'ApprovedJokeController as vm'
                }
            }
        }).state('jokehub.manageJoke.pending', {
            url: '/pending',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/joke/manage-joke/manage-joke.html',
                    controller: 'ManageJokeController as vm'
                },
                'managejoke@jokehub.manageJoke.pending': {
                    templateUrl: 'app/views/joke/manage-joke/pending/pending.html',
                    controller: 'PendingJokeController as vm'
                }
            }
        }).state('jokehub.manageJoke.rejected', {
            url: '/rejected',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/joke/manage-joke/manage-joke.html',
                    controller: 'ManageJokeController as vm'
                },
                'managejoke@jokehub.manageJoke.rejected': {
                    templateUrl: 'app/views/joke/manage-joke/rejected/rejected.html',
                    controller: 'RejectedJokeController as vm'
                }
            }
        });
    };
})();