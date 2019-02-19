(function () {
    'use strict';

    angular
        .module('app_module.organizemeetingcontroller', [])
        .controller('OrganizeMeetingController', OrganizeMeetingController);

    OrganizeMeetingController.$inject = ['ConsultancyService', '$rootScope'];
    function OrganizeMeetingController(ConsultancyService, $rootScope) {
        var vm = this;

    }

})();