(function(){

  'use strict';
  angular.module('app.mainCategory', [])
  .config(config);

  function config($stateProvider){
    $stateProvider.state('app.main-category',{
      url : '/main-category',
      views  : {
        'content@app': {
            templateUrl: 'app/mainCategory/mainCategory.html',
            controller : 'MainCategoryController as vm'
        }
      }
    })
  }
})();
