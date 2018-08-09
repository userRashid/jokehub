(function () {
    angular.module('jokehubApp', [
        'ui.router',
        'angularTrix',
        'jokehubApp.filter',
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
        'jokehubApp.privilege',
        'jokehubApp.administrator',
        'smart-table',
        'ngAnimate',
        'toastr',
        'ngImgCrop',
        'ui.bootstrap'
    ])
})();