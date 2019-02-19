(function () {
    'use strict';

    angular
        .module('app_module.aboutuscontroller')
        .controller('AboutUsController', AboutUsController);

    AboutUsController.$inject = ['LemorasService', '$rootScope'];
    function AboutUsController(LemorasService, $rootScope) {
        var vm = this;

    }

})();