(function() {

    'use strict';

    angular
        .module('app.joke')
        .controller('JokeController', JokeController);

    /** @ngInject */
    function JokeController(API,JokeService) {

        var vm = this;
        JokeService.getCategories().then(function(categories){
          vm.categories = categories;
        });
        vm.Create = function(_data,_image){
          API._post('jokes',_data).then(function(){
          });
        }

    }

})();
