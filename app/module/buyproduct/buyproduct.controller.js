(function () {
    'use strict';

    angular
        .module('app_module.buyproduct')
        .controller('BuyProductController', BuyProductController);

    BuyProductController.$inject = ['ProductService', '$rootScope'];
    function BuyProductController(ProductService, $rootScope) {
        var vm = this;

    }

})();