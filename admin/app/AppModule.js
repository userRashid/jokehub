(function () {
    angular.module('jokehubApp').run(_setUp).config(_config);

    _setUp.$inject = ['$rootScope', 'LoginService', '$location'];

    function _setUp($rootScope, LoginService, $location) {
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var loggedIn = LoginService.isLogin(),
                currentUrl = $location.path().split('/')[1],
                restrictedPage = $.inArray(currentUrl, ['login', 'signup', 'confirm', 'forgot-password', 'resetpassword']) === -1;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

    function _config() { }

})();