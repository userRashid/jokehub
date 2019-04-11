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
      let temp = [];
      data.forEach(function (e) {
        let category = _.filter(categoreis, function (item) {
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

    function CreateImage(_data, _canvas, _colors, _fontSize, _height, callback) {
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
        Vibrant.from(img).getPalette().then((swatches) => {
          let color = '#000000';
          /* for (let swatch in swatches) {
            if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
              if (swatch === 'DarkVibrant') {
                color = swatches[swatch].getHex();
              }
            }
          } */
          _canvas.height = _height + 20;
          ctx.drawImage(img, 0, 0);
          let data = '<svg id="svg1" xmlns="http://www.w3.org/2000/svg" version="1.1">' +
            '<foreignObject width="100%" height="100%">' +
            '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:' + _fontSize + 'px; padding:10px; color:' + color + '">' + _data + '</div>' +
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
            let b64 = btoa(unescape(encodeURIComponent(svg)));
            return "data:image/svg+xml;base64," + b64;
          }
          _img.src = buildSvgImageUrl(data);
        });
      });
    };

    function getColors() {
      let color = null;
      let rgb = ['255', '0', '0'];
      let r = Math.round(Math.random() * 255);
      let g = Math.round(Math.random() * 255);
      let b = Math.round(Math.random() * 255);
      rgb[0] = r;
      rgb[1] = g;
      rgb[2] = b;
      let c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
      let o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
      if (o > 125) {
        color = '#000000';
      } else {
        color = '#ffffff';
      }

      return { bg: c, color: color };
    }

    /////////////////////////////////////////////////////////////

    let vm = this;
    vm.canCreateImage = false;
    onInit();

    function onInit() {
      CategoryService.getAllCategory().then(function (res) {
        let categoreis = res.data;
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
        let nid = vm.editData.nid;
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
      let _colors = getColors();
      let _smallCanvas = document.getElementById("smallImage");
      let _bigCanvas = document.getElementById("bigImage");
      let description = viewData.description;
      let _string = '<div style="padding: 10px 0 20px;">' + description + '</div>';
      let _o = _string.replace(new RegExp("<br>", 'g', '&nbsp;'), "<br />");
      _o = _o.replace(/\&nbsp;/g, '');
      vm.imageData = {};
      let _small_height = $('#joke-image-small').height();
      let _big_height = $('#joke-image-big').height();
      CreateImage(_o, _smallCanvas, _colors, 18, _small_height, function () {
        vm.imageData.smallImage = _smallCanvas.toDataURL();
      });
      CreateImage(_o, _bigCanvas, _colors, 30, _big_height, function () {
        vm.imageData.bigImage = _bigCanvas.toDataURL();
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
      let tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    }

    this.displayDescription = function (html) {
      return $sce.trustAsHtml(html);
    }

    this.selectAll = function () {
      let selectStatus = !vm.isAllSelected;
      angular.forEach(vm.pendingContent, function (item) { item.selected = selectStatus; });

    }

    this.isAllContentEnabled = function () {
      return !_.some(vm.pendingContent, function (item) {
        return item.selected;
      });
    }
  }
})();