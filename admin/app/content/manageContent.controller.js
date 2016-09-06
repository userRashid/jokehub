(function() {

    'use strict';

    angular
        .module('app.content')
        .controller('ManageContentController', ManageContentController);

    /** @ngInject */
    function ManageContentController(API, $scope) {

        var vm = this;
        API._get('main-category').then(function(response){
          vm.mainCategory = response.data;
        });
        $scope.$watch(
            function watchFoo( scope ) {
              return( vm.selectedMainCategory );
            },function handleFooChange( newValue, oldValue ) {
              if(newValue == undefined) return;
              API._get('contents/'+newValue).then(function(response){
                vm.contents = response.data;
              })
            }
        );
    }

})();
