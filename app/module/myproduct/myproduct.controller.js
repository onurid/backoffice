(function () {
    'use strict';

    angular
        .module('app_module.myproductcontroller')
        .controller('MyProductController', MyProductController);

    MyProductController.$inject = ['ProductService', '$rootScope'];
    function MyProductController(ProductService, $rootScope) {
        var vm = this;

    }

})();