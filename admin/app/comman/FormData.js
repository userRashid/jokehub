(function() {

    'use strict';
    angular
        .module('app.core',[])
        .factory('DrawFrom', DrawFrom);

    function DrawFrom(){
        return {
            addUser:   addUser
        }


        ////////////////////////////////////////
        //
        //  Local Function
        //
        ////////////////////////////////////////

          function exportModel(){

            function createModel(d){
              if(d.model != undefined) {
                return {name:d.name,value:d.model};
              } else {
                return {name:d.name,value:''}
              }
            }

            var Model = this.data,
              len = Model.length,
              _temp = new Array();
            for(var i=0;i<len;i++){
              if(Model[i].hasOwnProperty('data')){
                var _data = Model[i].data,_len = _data.length, tempModel = new Array();
                for(var j=0;j<_len;j++){
                  tempModel.push(createModel(_data[j]));
                }
                var obj = {};
                obj[Model[i].name] = tempModel;
                _temp.push(obj);
              } else {
                _temp.push(createModel(Model[i]));
              }
            }
            return _temp;
          }
          //////////////////////////////////////
          function importModel(model){

            var data = this.data,
              len = data.length,
              _temp = new Array(),
              model = model;
            for(var i=0;i<len;i++){
              for (key in model){
                if(data[i].name === key){
                  var _data = data[i].data,
                      _len = _data.length,
                      _model = model[key][0];
                  for(var j=0;j<_len;j++){
                    for(_key in _model){
                      if(_data[j].name === _key){
                        _data[j].model = _model[_key];
                      }
                    }
                  }
                }
              }
            }
            return this;
          }
          //////////////////////////////////////
          //Draw a form for Add User
            function addUser(){
              var json = [{
                'title':'Login Information',
                'name':'login',
                data : [{
                  title : 'Email'
                  ,type : 'text'
                  ,name : 'u_email'
                },{
                  title : 'Password'
                  ,type : 'password'
                  ,name : 'u_pwd'
                },{
                  title : 'Re-password'
                  ,type : 'password'
                  ,name : 'r_u_pwd'
                }]
              },{
                'title':'Detail',
                'name':'detail',
                data : [{
                  title : 'Name'
                  ,type : 'text'
                  ,name : 'u_name'
                },{
                  title : 'Country'
                  ,type : 'text'
                  ,name : 'ud_country'
                },{
                  title : 'Sex'
                  ,type : 'wsSelect'
                  ,name : 'ud_sex'
                  ,values : $q.when({data:[{c_id:'1',n_title:'Male'},{c_id:'2',n_title:'Female'}]})
                },{
                  title : 'About Me'
                  ,type : 'textarea'
                  ,name : 'ud_about'
                },{
                  title : 'Date of Birth'
                  ,type : 'text'
                  ,name : 'ud_dob'
                },{
                  title : 'Profile Title'
                  ,type : 'textarea'
                  ,name : 'ud_title'
                },{
                  title : 'Profile image'
                  ,type : 'upload'
                  ,name : 'ud_image'
                },{
                  title : 'Address'
                  ,type : 'textarea'
                  ,name : 'ud_address'
                },{
                  title : 'Phone'
                  ,type : 'text'
                  ,name : 'ud_phone'
                }]
              },{
                'title':'User Privilege',
                'name':'privilege',
                data : [{
                  title : 'Privilege'
                  ,type : 'privilege'
                  ,name : 'privilege'
                }]
              }];
              return {data : json, exportModel : exportModel,importModel : importModel};
            }
    }
});
