(function(){

    window.salesTaxes = window.salesTaxes || {};

    window.salesTaxes.basketItem = function(description, price) {

        var _description = description;
        var _price = price;
        var _salesTaxTypes = Array.prototype.slice.call(arguments, 2);

        var _getDescription = function() {
            return _description;
        };

        var _getPrice = function() {
            return _price;
        };

        var _getSalesTaxTypes = function() {
            return _salesTaxTypes;
        };

        return {
            getDescription: _getDescription,
            getPrice: _getPrice,
            getSalesTaxTypes: _getSalesTaxTypes
        };
    };
}());
