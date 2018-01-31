(function () {
    angular.module('jokehubApp.joke')
        .factory('JokeService', _JokeService);

    _JokeService.$inject = ['Http', 'Notification'];

    function _JokeService(Http, Notification) {
        return {
            createJoke: _createJoke,
            getAllJoke: _getAllJoke
        }

        function _createJoke(model) {
            Http._post('api/joke/add/product', model).then(function () {
                Notification.notify('success', 'Success', ' New Joke added ');
            });
        }

        function _getAllJoke(model) {
            return Http._get('api/products/all');
        }
    }
})();