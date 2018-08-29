(function () {
    'use strict';

    angular
        .module('jokehubApp.earning')
        .factory('EarningServices', _EarningServices);

    _EarningServices.$inject = ['Http', '$q'];

    function _EarningServices(_http, $q) {
        return {
            getEarning: _getEarning,
            getUserEarning: _getUserEarning
        }

        function _getEarning() {
            return _http._get('earning');
        }

        function _getUserEarning(model) {
            let _q = $q.defer();
            _http._post('earning/user', model).then(function (res) {
                let groupedByMonth = _.groupBy(res.data, function (item) {
                    return item.date.substring(0, 7);
                });
                _q.resolve(groupedByMonth);
            });
            return _q.promise;
        }
    }
})();