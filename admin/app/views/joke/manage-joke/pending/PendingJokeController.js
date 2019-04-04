(function () {
  'use strict';

  angular
    .module('jokehubApp.joke')
    .controller('PendingJokeController', _PendingJokeController);

  _PendingJokeController.$inject = ['JokeService', '$sce', 'CategoryService', 'RejectReason', 'AdministratorService', 'NgTableParams'];

  function _PendingJokeController(JokeService, $sce, CategoryService, RejectReason, AdministratorService, NgTableParams) {

    /////////////////////////////////////////////////////////////
    // Locals
    /////////////////////////////////////////////////////////////

    function getCategory(data, categoreis) {
      var temp = [];
      data.forEach(function (e) {
        var category = _.filter(categoreis, function (item) {
          return item.id === e.cid
        })[0];
        if (category != undefined) {
          e.category = category.name;
        }
        temp.push(e);
      });
      return temp;
    }

    function getIds(_data) {
      let _ids = [];
      _.filter(_data, function (item) {
        return item.selected;
      }).forEach(function (item) {
        _ids.push(item.nid);
      });
      return _ids;
    }
    function CreateImage(_data, _canvas, callback) {
      let imagePath = '../jokes-images/background/';
      let items = [imagePath + '2.png', imagePath + '1.png', imagePath + '3.png', imagePath + '4.png'];
      let img_src = items[Math.floor(Math.random() * items.length)];

      let img = document.createElement('img');
      let DOM_URL = window.URL || window.webkitURL || window;
      let _img = new Image();
      _img.crossOrigin = "anonymous";

      let ctx = _canvas.getContext("2d");
      img.setAttribute('src', img_src);
      img.setAttribute('crossOrigin', '');
      img.addEventListener('load', function () {
        let _height = $('#joke-image').height();
        Vibrant.from(img).getPalette().then((swatches) => {
          let color = '';
          for (let swatch in swatches) {
            if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
              if (swatch === 'DarkVibrant') {
                color = swatches[swatch].getHex();
              }
            }
          }
          _canvas.height = _height + 20;
          ctx.drawImage(img, 0, 0);
          let data = '<svg id="svg1" xmlns="http://www.w3.org/2000/svg" version="1.1">' +
            '<foreignObject width="100%" height="100%">' +
            '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:18px; padding:10px; color:' + color + '">' + _data + '</div>' +
            '</foreignObject>' +
            '</svg>';
          let svg = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });

          let url = DOM_URL.createObjectURL(svg);
          _img.onload = function () {
            DOM_URL.revokeObjectURL(url);
            ctx.drawImage(this, 0, 0);
            callback(this);
          }

          function buildSvgImageUrl(svg) {
            let b64 = btoa(unescape(encodeURIComponent(svg)));//window.btoa(svg);
            return "data:image/svg+xml;base64," + b64;
          }
          _img.src = buildSvgImageUrl(data);
        });
      });
    };

    /////////////////////////////////////////////////////////////

    var vm = this;
    vm.canCreateImage = false;
    vm.imageData = null;
    onInit();

    function onInit() {
      CategoryService.getAllCategory().then(function (res) {
        var categoreis = res.data;
        JokeService.getAllJoke().then(function (response) {
          let _response = response.data;
          vm.approvedContent = getCategory(_response.approved, categoreis);
          vm.approvedCount = vm.approvedContent.length;
          vm.pendingContent = getCategory(_response.pending, categoreis);
          vm.pendingCount = vm.pendingContent.length;
          vm.rejectedContent = getCategory(_response.reject, categoreis);
          vm.rejectedCount = vm.rejectedContent.length;
          vm.tableParams = new NgTableParams({}, { dataset: vm.approvedContent });
        });
      });
      AdministratorService.getAllReasons().then(function (response) {
        vm.rejectReason = response.data;
      });

    }

    this.edit = function (data) {
      this.editData = data;
      vm.updateJokeModel.setModel(data);
    }

    this.update = function () {
      vm.updateJokeModel.getModel().then(function (model) {
        var nid = vm.editData.nid;
        JokeService.updateJoke(nid, model);
      });
    }

    this.modifyStatus = function (row) {
      JokeService.modifyStatus(row);
    }

    this.view = function (row) {
      this.viewData = row;
    }

    this.changeStatus = function (viewData, isForApprove) {
      let nid = viewData.nid;
      if (this.changeStatus && isForApprove) {
        let model = {};
        model.nid = nid;
        model.imageData = vm.imageData;
        JokeService.uploadJokeImage(model);
      }
      if (isForApprove) {
        JokeService.changeStatus([nid], isForApprove, null);
      } else {
        RejectReason.getReason({
          'id': [nid],
          'data': vm.rejectReason
        });
      }
    }

    this.createImage = function (viewData) {
      let _canvas = document.getElementById("myCanvas");
      let description = viewData.description;
      let _string = '<div style="padding: 10px 0 20px;">' + description + '</div>';
      let _o = _string.replace(new RegExp("<br>", 'g', '&nbsp;'), "<br />");
      _o = _o.replace(/\&nbsp;/g, '');
      CreateImage(_o, _canvas, function () {
        vm.imageData = _canvas.toDataURL();
      });
    }

    this.approveAll = function () {
      let ids = getIds(vm.pendingContent);
      JokeService.changeStatus(ids, true, null);
    }

    this.rejectAll = function () {
      let ids = getIds(vm.pendingContent);
      RejectReason.getReason({
        'id': ids,
        'data': vm.rejectReason
      });
    }

    vm.stripHtml = function (html) {
      var tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    }

    this.displayDescription = function (html) {
      return $sce.trustAsHtml(html);
    }

    this.selectAll = function () {
      var selectStatus = !vm.isAllSelected;
      angular.forEach(vm.pendingContent, function (item) { item.selected = selectStatus; });

    }

    this.isAllContentEnabled = function () {
      return !_.some(vm.pendingContent, function (item) {
        return item.selected;
      });
    }
  }
})();