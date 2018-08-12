(function () {
    angular.module('jokehubApp.user')
        .factory('UserService', _UserService);

    _UserService.$inject = ['Http', '$q'];

    function _UserService(_http, $q) {
        return {
            getAllUser: _getUserUser,
            getUserDetails: _getUserDetails
        }

        //////////////////////////////////////////////////
        // Locals
        //////////////////////////////////////////////////

        function mapCategories(jokes, categoreis) {
            var temp = [];
            jokes.forEach(function (e) {
                var category = _.filter(categoreis, function (item) {
                    return item.id === e.cid
                })[0];
                if (category != undefined) {
                    e.category = category.name;
                }
                temp.push(e);
            });
            return temp;
        }

        function getContentStatus(content, status, isPaid) {
            var temp = [];
            content.forEach(item => {
                if (item.status === status && item.isPaid === isPaid) {
                    temp.push(item);
                }
            });
            return temp;
        }

        /////////////////////////////////////////////////

        function _getUserUser() {
            return _http._get('user/all');
        }

        function _getUserDetails(id) {
            var _p = [_http._get('userdetails/' + id), _http._get('usercontent/all/' + id), _http._get('category/all')];
            var _q = $q.defer();
            var _temp = {};
            $q.all(_p).then(function (response) {
                let user = response[0].data;
                let content = mapCategories(response[1].data, response[2].data);
                _temp['approvedPaymentPending'] = getContentStatus(content, 'approve', false);
                _temp['approvedAndPaid'] = getContentStatus(content, 'approve', true);
                _temp['pendingStatus'] = getContentStatus(content, 'pending', false);
                _temp['rejectedStatus'] = getContentStatus(content, 'reject', false);
                _temp['user'] = user;
                _q.resolve(_temp);
            })
            return _q.promise;
        }
    }
})();