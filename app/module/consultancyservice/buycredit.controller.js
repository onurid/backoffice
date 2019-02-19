(function () {
    'use strict';

    angular
        .module('app_module.buycreditcontroller', [])
        .controller('BuyCreditController', BuyCreditController);

    BuyCreditController.$inject = ['ConsultancyService', '$rootScope'];
    function BuyCreditController(ConsultancyService, $rootScope) {
        var vm = this;

    }

})();