(function () {
    'use strict';

    angular
        .module('jokehubApp.administrator')
        .controller('ManageTestimonialController', _ManageTestimonialController);

    _ManageTestimonialController.$inject = ['AdministratorService', '$sce'];

    function _ManageTestimonialController(AdministratorService, $sce) {
        var vm = this;

        function OnInit() {
            AdministratorService.getAllTestimonial().then(function (response) {
                vm.allTestimonials = response.data;
            });
        }

        OnInit();

        vm.changeStatus = function (data) {
            AdministratorService.changeStatus(data);
        }

        vm.stripHtml = function (html) {
            var tmp = document.createElement("DIV");
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || "";
        }

        this.view = function (row) {
            this.viewData = row;
        }

        this.displayDescription = function (html) {
            return $sce.trustAsHtml(html);
        }

        this.edit = function (data) {
            this.editData = data;
            vm.addTestimonialModel.setModel(data);
        }

        this.update = function () {
            vm.addTestimonialModel.getModel().then(function (model) {
                var id = vm.editData.id;
                AdministratorService.updateTestimonial(id, model);
            });
        }
    }
})();