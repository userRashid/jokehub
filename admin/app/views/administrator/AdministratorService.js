(function () {
    angular.module('jokehubApp.administrator')
        .factory('AdministratorService', _AdministratorService);

    _AdministratorService.$inject = ['Http', 'Notification'];

    function _AdministratorService(Http, Notification) {
        return {
            createRejectReason: _createRejectReason,
            getAllReasons: _getAllReasons,
            getAllTestimonial: _getAllTestimonial,
            updateTestimonial: _updateTestimonial,
            changeStatus: _changeStatus
        }

        function _getAllReasons() {
            return Http._get('contentmanagement/all');
        }

        function _getAllTestimonial() {
            return Http._get('testimonial');
        }

        function _updateTestimonial(id, model) {
            Http._put('testimonial/' + id, model).then(function (response) {
                Notification.notify('success', 'Success', ' Update Seccess');
            }, function (error) {
                console.log('error', error);
            });;
        }

        function _createRejectReason(data) {
            return Http._post('contentmanagement/addrejectreason', data).then(function (response) {
                Notification.notify('success', 'Success', ' New Reject Reason added ');
            }, function (error) {
                console.log('error', error);
            });
        }

        function _changeStatus(data) {
            var model = { 'id': data.id };
            model.status = data.isActive == '1' ? 0 : 1;
            Http._post('testimonial/status', model).then(function () {
                Notification.notify('success', 'Success', ' Status modified successfully');
            });
        }
    }
})();