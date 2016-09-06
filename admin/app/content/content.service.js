(function() {

    'use strict';

    angular
        .module('app.content')
        .factory('ContentService', ContentService);

    /** @ngInject */
    function ContentService(API, $q) {
        return {
          getCategories : getCategories
        }
        function getCategories(){
          var _q = $q.defer()
            ,_temp = new Array();
          API._get('category').then(function(response){
            response.data.forEach(function(item){
              _temp.push({name:item.title,value:item.id});
            });
            _q.resolve(_temp);
          });
          return _q.promise;
        }
    }

})();
