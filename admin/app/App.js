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
        'jokehubApp.subscriber',
        'smart-table',
        'ngAnimate',
        'toastr'
    ])
})();