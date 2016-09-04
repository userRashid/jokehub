(function(){

  'use strict';
  angular
    .module('app.comman')
    .factory('Node',Node);

  function Node(API){
    return {
      createNode : createNode
    }

    function Publish(){
      API._get('publish/'+this.n_id).then(function(){
        this.status = 1;
      })
    }

    function Unpublish(){
      API._get('unpublish/'+this.n_id).then(function(){
        this.status = 0;
      })
    }

    function createNode(data){
      data.forEach(function(item){
        item.publish = Publish;
        item.unpublish = Unpublish;
      });
      return data;
    }
  }
})();
