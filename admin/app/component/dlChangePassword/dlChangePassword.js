(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('dlChangePassword', _dlChangePassword);

    _dlChangePassword.$inject = ['Http', 'Notification'];

    function _dlChangePassword(Http, Notification) {
        return {
            restrict: 'A'
            , controller: controller
            , templateUrl: 'app/component/dlChangePassword/dlChangePassword.html'
            , scope: {}
        }

        function controller($scope) {
            $scope.passwordNotMatch = false;
            $scope.passwordValidate = function (passwordData) {
                if (!passwordData) return true;
                var old = passwordData.hasOwnProperty('oldpassword') && passwordData.oldpassword != undefined && passwordData.oldpassword != '';
                var _new = passwordData.hasOwnProperty('newpassword') && passwordData.newpassword != undefined && passwordData.newpassword != '';
                var _confirm = passwordData.hasOwnProperty('confirmpassword') && passwordData.confirmpassword != undefined && passwordData.confirmpassword != '';
                $scope.passwordNotMatch = passwordData.newpassword != passwordData.confirmpassword && _confirm;
                $scope.old_new = old && _confirm && passwordData.newpassword == passwordData.oldpassword;
                var isDisabled = old && _new && _confirm &&
                    passwordData.newpassword == passwordData.confirmpassword;
                return !isDisabled;
            }
            $scope.changePassword = function (data) {
                var temp = new Object();
                temp.oldpassword = data.oldpassword;
                temp.password = data.newpassword;
                Http._put('changepassword', temp).then(function (response) {
                    Notification.notify('success', 'Password Change', response.data.message);
                });
            }
        }
    }
})();