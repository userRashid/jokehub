(function () {
    angular.module('jokehubApp.subscriber', [])
        .config(config);

    function config($stateProvider) {

        $stateProvider.state('jokehub.addSubscriber', {
            url: '/add-subscriber',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/subscriber/add-subscriber/add-subscriber.html',
                    controller: 'AddSubscriberController as vm'
                }
            }
        }).state('jokehub.manageSubscriber', {
            url: '/manage-subscriber',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/subscriber/manage-subscriber/manage-subscriber.html',
                    controller: 'ManageSubscriberController as vm'
                }
            }
        });
    };
})();