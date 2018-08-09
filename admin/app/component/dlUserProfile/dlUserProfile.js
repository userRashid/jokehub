(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('dlUserProfile', _dlUserProfile);

    _dlUserProfile.$inject = ['Http', 'Notification'];

    function _dlUserProfile(Http, Notification) {
        return {
            restrict: 'A'
            , controller: controller
            , templateUrl: 'app/component/dlUserProfile/dlUserProfile.html'
            , scope: {}
        }

        function controller($scope) {
            Http._get('userprofile').then(function (response) {
                $scope.userProfile = response.data;
            });
            Http._get('paymentdetail').then(function (response) {
                $scope.paymentDetail = response.data;
            });
            $scope.updateDetails = function () {
                $scope.userDetailModel.getModel().then(function (model) {
                    Http._put('userprofile', model).then(function (response) {
                        Notification.notify('success', 'Success', response.data.message);
                    });
                });
            }
            $scope.editProfile = function () {
                $scope.userDetailModel.setModel($scope.userProfile)
            }
            $scope.editPaymentDetails = function () {
                $scope.userPaymentDetailModel.setModel($scope.paymentDetail)
            }
            $scope.updatePaymentDetails = function () {
                $scope.userPaymentDetailModel.getModel().then(function (model) {
                    Http._put('paymentdetail', model).then(function (response) {
                        Notification.notify('success', 'Success', response.data.message);
                    });
                });
            }
        }
    }
})();