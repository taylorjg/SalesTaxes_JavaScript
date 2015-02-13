(function(){

    window.salesTaxes = window.salesTaxes || {};
    window.salesTaxes.mathUtils = window.salesTaxes.mathUtils || {};

    window.salesTaxes.mathUtils.roundUp = function(n) {
            return Math.ceil(n * 20) / 20;
        };

    window.salesTaxes.mathUtils.toPrecision = function(n) {
        return Math.round(n * 100) / 100;
    };

}());
