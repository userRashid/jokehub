(function () {
    'use strict';

    angular
        .module('jokehubApp.earning')
        .controller('EarningController', _EarningController);

    _EarningController.$inject = ['EarningServices'];

    function _EarningController(EarningServices) {

        //////////////////////////////////////////////////////////////
        // Locals
        //////////////////////////////////////////////////////////////

        function getMonthsData() {
            return [{
                month: "01",
                nids: [],
                cost: 0
            }, {
                month: "02",
                nids: [],
                cost: 0
            }, {
                month: "03",
                nids: [],
                cost: 0
            }, {
                month: "04",
                nids: [],
                cost: 0
            }, {
                month: "05",
                nids: [],
                cost: 0
            }, {
                month: "06",
                nids: [],
                cost: 0
            }, {
                month: "07",
                nids: [],
                cost: 0
            }, {
                month: "08",
                nids: [],
                cost: 0
            }, {
                month: "09",
                nids: [],
                cost: 0
            }, {
                month: "10",
                nids: [],
                cost: 0
            }, {
                month: "11",
                nids: [],
                cost: 0
            }, {
                month: "12",
                nids: [],
                cost: 0
            }]
        }

        function makeDataForChart(_data) {
            let formatedData = [];
            for (let key in _data) {
                let months = getMonthsData();
                let splitData = key.split("-");
                let year = splitData[0];
                let month = splitData[1];
                let isYearPresent = _.find(formatedData, function (item) {
                    return item.year == year;
                });
                if (isYearPresent == undefined) {
                    months.forEach(function (e) {
                        if (e.month == month) {
                            _data[key].forEach(function (i) {
                                let _cost = parseInt(i.cost);
                                e.cost = e.cost + _cost;
                                e.nids = e.nids.concat(i.content);
                            });
                        };
                    });
                    let yearData = { year: year, months: months };
                    formatedData.push(yearData);
                } else {
                    formatedData.forEach(function (e) {
                        if (e.year == year) {
                            e.months.forEach(function (e) {
                                if (e.month == month) {
                                    _data[key].forEach(function (i) {
                                        let _cost = parseInt(i.cost);
                                        e.cost = e.cost + _cost;
                                        e.nids = e.nids.concat(i.content);
                                    });
                                };
                            });
                        };
                    });
                }
            }
            return formatedData;
        }

        //////////////////////////////////////////////////////////////


        var vm = this;
        vm.model = {};

        vm.labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

        /* vm.data = [
            [65, 59, 80, 81, 56, 55, 40, 45, 85, 120, 250, 230],
            [28, 48, 40, 250, 86, 27, 90, 65, 59, 80, 81, 56]
        ]; */

        function OnInit() {
            EarningServices.getEarning().then(function (_data) {
                vm.earning = _data.data;
            });
        }

        OnInit();

        this.filter = function () {
            let fromYear = parseInt(vm.model.from.year.value);
            let fromMonth = parseInt(vm.model.from.month.value);
            let toYear = parseInt(vm.model.to.year.value);
            let toMonth = parseInt(vm.model.to.month.value);

            let daysInMonth = new Date(toYear, toMonth, 0).getDate();

            let formDate = new Date(fromYear, fromMonth - 1, 1);
            let toDate = new Date(toYear, toMonth - 1, daysInMonth);
            toDate.setHours(23, 59, 59, 999);
            let model = { formDate: formDate, toDate: toDate };
            EarningServices.getUserEarning(model).then(function (_data) {
                vm.earnings = makeDataForChart(_data);
            });
        }

        vm.isFilterEnabled = function () {
            let isFilterEnable = false;
            if (vm.model.from && vm.model.to) {
                let _form = vm.model.from;
                let _to = vm.model.to;
                if (_form.year.value && _form.month.value && _to.year && _to.year.value && _to.month && _to.month.value) {
                    isFilterEnable = true;
                } else {
                    isFilterEnable = false;
                }
            }
            return !isFilterEnable;
        }

        vm.viewEarning = function (data) {
            vm.viewEarningData = data;
        }
    }
})();