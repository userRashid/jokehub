(function() {

    'use strict';

    angular
        .module('app.joke')
        .controller('JokeController', JokeController);

    /** @ngInject */
    function JokeController(API) {

        var vm = this;
        vm.Create = function(_data,_image){
          API._post('jokes',_data).then(function(){
          });
        }

    }

})();
