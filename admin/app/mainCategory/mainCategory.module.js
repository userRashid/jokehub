(function(){

  'use strict';
  angular
    .module('app.mainCategory', [])
    .config(config);

  function config($stateProvider){
    $stateProvider.state('app.add-main-category',{
      url : '/add-main-category',
      views  : {
        'content@app': {
            templateUrl: 'app/mainCategory/addMainCategory.html',
            controller : 'AddMainCategoryController as vm'
        }
      }
    }).state('app.manage-main-category',{
      url : '/manage-main-category',
      views  : {
        'content@app': {
            templateUrl: 'app/mainCategory/manageMainCategory.html',
            controller : 'ManageMainCategoryController as vm'
        }
      }
    }).state('app.manage-main-category:id',{
       url : '/manage-main-category/:categoryId',
       views  : {
         'content@app': {
             templateUrl: 'app/mainCategory/addMainCategory.html',
             controller : 'AddMainCategoryController as vm'
         }
       }
     });
  }
})();//ManageMainCategoryController
