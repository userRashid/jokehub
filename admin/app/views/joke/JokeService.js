(function () {
    angular.module('jokehubApp.joke')
        .factory('JokeService', _JokeService);

    _JokeService.$inject = ['Http', 'Notification', '$state'];

    function _JokeService(Http, Notification, _state) {
        return {
            createJoke: _createJoke,
            getAllJoke: _getAllJoke
        }

        function _createJoke(model) {
            Http._post('content/add', model).then(function () {
                Notification.notify('success', 'Success', ' New Joke added ');
                _state.go('jokehub.manageJoke');
            });
        }

        function _getAllJoke(model) {
            return Http._get('content/all');
        }
    }
})();