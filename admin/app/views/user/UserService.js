(function () {
    angular.module('jokehubApp.user')
        .factory('UserService', _UserService);

    _UserService.$inject = ['Http', '$q', 'Notification'];

    function _UserService(_http, $q, Notification) {
        return {
            getAllUser: _getUserUser,
            getUserDetails: _getUserDetails,
            updatePayments: _updatePayments,
            makePayment: _makePayment,
            deleteUser: _deleteUser,
            changeStatus: _changeStatus
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
            var _p = [
                _http._get('userdetails/' + id),
                _http._get('usercontent/all/' + id),
                _http._get('category/all'),
                _http._get('payments/' + id),
                _http._get('paymentdetails/' + id),
                _http._get('useraccountdetail/' + id)
            ];
            var _q = $q.defer();
            var _temp = {};
            $q.all(_p).then(function (response) {
                let user = response[0].data;
                let content = mapCategories(response[1].data, response[2].data);
                _temp['approvedPaymentPending'] = getContentStatus(content, 'approve', false);
                _temp['approvedAndPaid'] = response[3].data;
                _temp['pendingStatus'] = getContentStatus(content, 'pending', false);
                _temp['rejectedStatus'] = getContentStatus(content, 'reject', false);
                _temp['user'] = user;
                _temp['payments'] = response[4].data;
                _temp['accountDetail'] = response[5].data;
                _q.resolve(_temp);
            })
            return _q.promise;
        }

        function _updatePayments(model) {
            return _http._post('updatepayments', model);
        }

        function _makePayment(model) {
            return _http._post('makepayments', model).then(function () {
                Notification.notify('success', 'Success', 'Payment successfull');
            });
        }

        function _changeStatus(model) {
            return _http._put('user/status', model).then(function (res) {
                Notification.notify('success', 'Success', res.data);
            });
        }

        function _deleteUser(userId) {
            _http._delete('user/' + userId)
        }
    }
})();