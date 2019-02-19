(function () {
    'use strict';

    angular
        .module('app_module.mysessioncontroller')
        .controller('MySessionController', MySessionController);

    MySessionController.$inject = ['ConsultancyService', '$rootScope'];
    function MySessionController(ConsultancyService, $rootScope) {
        var vm = this;

    }

})();