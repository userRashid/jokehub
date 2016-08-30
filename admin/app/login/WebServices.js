(function() {

    'use strict';
    angular
        .module('app.login')
        .factory('API', API);

    function API($http,Session) {
        return {
            _get    : _get
            ,_post  : _post
            ,_put   : _put
            ,_delete : _delete
        };
        function _get(url,headers){
            if(typeof(headers) === 'undefined') headers = {};
            return httpRequest('get', url, headers);
        }

        // Post Request
        function _post(url,data,headers){
            if(typeof(headers) === 'undefined') headers = {};
            return httpRequest('post', url, headers, data);
        }

        // Put Reqiest
        function _put(url,data,headers){
            if(typeof(headers) === 'undefined') headers = {};
            return httpRequest('put', url, headers, data);
        }

        //Delete Request
        function _delete(url,data,headers){
            if(typeof(headers) === 'undefined') headers = {};
            return httpRequest('delete', url, headers, data);
        }

        function injectHeader(headers) {

            function inject(key) {
                if(Session.get(key) !== null) {
                    headers[key] = Session.get(key);
                }
            }

            inject('Authorization');
            //inject('repository');
            //inject('ticket');
            //inject('username');
            return headers;
        }

        function httpRequest(method, apiPath, headers, data) {
            if(headers === 'undefined' || !angular.isObject(headers)) {
                headers = {};
            }
            headers = injectHeader(headers);

            var request = {
                method: method,
                url: pre_url + apiPath,
                headers: headers
            };
            if(typeof(data) !== 'undefined') {
                request.data = data;
            }
            return $http(request).
            error(function(data, status, headers, config) {
                // handle session timeout
                if(status == 408) {
                    Session.remove('repository');
                    Session.remove('ticket');
                    Session.remove('username');
                    Session.remove('user_name');
                }
            });
        }
    }
})();



(function() {

    'use strict';
    angular
          .module('app.login')
          .factory('Session', Session);

    /** @ngInject */
    function Session(){
        return {
            get: get
            ,set: set
            ,remove: remove
        };
        function get(key) {
            return sessionStorage.getItem(key);
        }

        function set(key,value) {
            sessionStorage[key] = value;
        }

        function remove(key) {
            sessionStorage.removeItem(key);
        }
    }

})();

