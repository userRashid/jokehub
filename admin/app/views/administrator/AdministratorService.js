(function () {
    angular.module('jokehubApp.administrator')
        .factory('AdministratorService', _AdministratorService);

    _AdministratorService.$inject = ['Http', 'Notification'];

    function _AdministratorService(Http, Notification) {
        return {
            createRejectReason: _createRejectReason,
            getAllReasons: _getAllReasons
        }

        function _getAllReasons() {
            return Http._get('contentmanagement/all');
        }

        function _createRejectReason(data) {
            return Http._post('contentmanagement/addrejectreason', data).then(function (response) {
                Notification.notify('success', 'Success', ' New Reject Reason added ');
            }, function (error) {
                console.log('error', error);
            });
        }
    }
})();