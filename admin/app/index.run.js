(function() {

    'use strict';

    angular
        .module('rin')
        .run(runBlock);

    /** @ngInject */
    runBlock.$inject = ['$rootScope', '$state', 'Session', '$timeout'];
    function runBlock($rootScope, $state, Session, $timeout) {
      $rootScope.$on('$locationChangeStart',function(event, next, current){
        $timeout(function(){
          var restrictedPage = $.inArray($state.current.url, ['/login', '/register']) === -1;
          var loggedIn = Session.get('ticket') !== '' && Session.get('ticket') !== null;
          if(!loggedIn) {
            $state.go('app.login',{});
          } 
        })
      });
    }
})();
