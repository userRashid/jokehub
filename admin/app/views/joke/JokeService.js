(function () {
    angular.module('jokehubApp.joke')
        .factory('JokeService', _JokeService);

    _JokeService.$inject = ['Http', 'Notification', '$state'];

    function _JokeService(Http, Notification, _state) {
        return {
            createJoke: _createJoke,
            getAllJoke: _getAllJoke,
            modifyStatus: _modifyStatus
        }

        function _createJoke(model) {
            Http._post('content/add', model).then(function () {
                Notification.notify('success', 'Success', ' New Joke added ');
                _state.go('jokehub.manageJoke');
            });
        }

        function _modifyStatus(data) {
            var model = [];
            var url = '';
            if (data.isActive === '1') {
                model.push(data.nid);
                url = 'content/unpublish';
            } else {
                model.push(data.nid);
                url = 'content/publish';
            }
            Http._post(url, model).then(function () {
                console.log('Called');
                Notification.notify('success', 'Success', ' Content modified successfully');
            });
        }

        function _getAllJoke(model) {
            return Http._get('content/all');
        }
    }
})();