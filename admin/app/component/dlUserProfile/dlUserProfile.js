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
            // $scope.changePassword = function (data) {
            //     var temp = new Object();
            //     temp.oldpassword = data.oldpassword;
            //     temp.password = data.newpassword;
            //     Http._put('changepassword', temp).then(function (response) {
            //         Notification.notify('success', 'Password Change', response.data.message);
            //     });
            // }
        }
    }
})();