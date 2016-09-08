(function() {

    'use strict';

    angular
        .module('rin')
        .run(runBlock);

    /** @ngInject */
    runBlock.$inject = ['$rootScope', '$state', 'Session'];

    ///////////////////////////////////////
    // Locals

    function getUrl(url){
      return url.split("#")[1];
    }

    function runBlock($rootScope, $state, Session) {
      $rootScope.$on('$locationChangeStart',function(event, next, current){
        var previousUrl = getUrl(current)
          ,currentUrl = getUrl(next)
          ,_url = '';
        if(previousUrl === currentUrl){
          _url = '/home';
        } else {
          _url = previousUrl;
        }
        var restrictedPage = $.inArray(currentUrl, ['/login', '/register']) === -1;
        var loggedIn = Session.get('ticket') !== '' && Session.get('ticket') !== null;
        if(!loggedIn && restrictedPage){
            $state.go('app.login',{});
        } else {
          //console.log('Login IN',restrictedPage,currentUrl);
        }
      });
    }
})();
