(function() {

    'use strict';

    angular
        .module('app.category')
        .factory('CategoryService', CategoryService);

    /** @ngInject */
    function CategoryService(API, $q) {
        return {
          getMainCategories : getMainCategories
        }
        function getMainCategories(){
          var _q = $q.defer()
            ,_temp = new Array();
          API._get('main-category').then(function(response){
            response.data.forEach(function(item){
              _temp.push({name:item.title,value:item.id});
            });
            _q.resolve(_temp);
          });
          return _q.promise;
        }
    }

})();
