(function () {
    angular.module('jokehubApp', [
        'ui.router',
        'jokehubApp.component',
        'jokehubApp.common',
        'jokehubApp.login',
        'jokehubApp.dashboard',
        'jokehubApp.navigation',
        'jokehubApp.joke',
        'jokehubApp.category',
        'jokehubApp.user',
        'jokehubApp.promote',
        'jokehubApp.earning',
        'jokehubApp.guidelines',
        'jokehubApp.signup',
        'jokehubApp.confirm',
        'smart-table',
        'ngAnimate',
        'toastr'
    ])
})();