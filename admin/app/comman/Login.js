(function(){

  'use strict';
  angular.module('app.login')
    .factory('Login',Login);

  function Login(API){
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
        sessionStorage.setItem('ticket',response.data[0].u_create_date);
        sessionStorage.setItem('user_name',response.data[0].u_name);
        sessionStorage.setItem('user_id',response.data[0].u_id);
        sessionStorage.setItem('Authorization',response.data[0].token);
        sessionStorage.setItem('privilege',JSON.stringify(response.data[0].privilege));
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
