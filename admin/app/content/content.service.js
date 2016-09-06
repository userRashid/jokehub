(function() {

    'use strict';

    angular
        .module('app.content')
        .factory('ContentService', ContentService);

    /** @ngInject */
    function ContentService(API, $q) {
        return {
          getCategories     : getCategories
          ,getCategoryById  : getCategoryById
        }

        var _allCategory = null;

        function getCategories(){
          var _q = $q.defer()
            ,_temp = new Array();
          API._get('category').then(function(response){
            _allCategory = response.data;
            response.data.forEach(function(item){
              _temp.push({name:item.title,value:item.id});
            });
            _q.resolve(_temp);
          });
          return _q.promise;
        }

        function getCategoryById(id){
          var _q = $q.defer()
            ,_temp = new Array();
            _allCategory.forEach(function(category){
              if(category.mc_id === id){
                _temp.push({name:category.title,value:category.id});
              }
            });
            _q.resolve(_temp);
            return _q.promise;
        }
    }

})();
