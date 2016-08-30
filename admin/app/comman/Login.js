(function(){

  'use strict';
  angular.module('app.login')
    .factory('Login',Login);

  function Login(API,$state){
    return {
      isLogin : isLogin
      ,login  : login
      ,logout : logout
      ,getUserId  : getUserId
    }

    function isLogin(){
      return sessionStorage.ticket != undefined;
    }

    function login(LoginModel){
      var headers = { Authorization: (btoa(LoginModel.userName + ':' + LoginModel.pwd))};
      API._get('authenticate',headers).then(function(response){
        sessionStorage.setItem('ticket',response.data.token);
        sessionStorage.setItem('name',response.data.name);
        sessionStorage.setItem('user_id',response.data.u_id);
        sessionStorage.setItem('Authorization',response.data.token);
        sessionStorage.setItem('privilege',JSON.stringify(response.data.privilege));
        $state.go('app.home');
      },function(error){
        toastr.error(error.data);
      });
    }

    function logout(){
      sessionStorage.clear();
    }

    function getUserId(){
      return sessionStorage.user_id;
    }
  }
})();
