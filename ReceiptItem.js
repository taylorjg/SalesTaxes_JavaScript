(function(){

    window.salesTaxes = window.salesTaxes || {};

    window.salesTaxes.receiptItem = function(basketItem, salesTax) {

        var _basketItem = basketItem;
        var _salesTax = salesTax;

        var _getBasketItem = function() {
            return _basketItem;
        };

        var _getSalesTax = function() {
            return _salesTax;
        };

        var _getPriceIncludingSalesTax = function() {
            return salesTaxes.mathUtils.toPrecision(_basketItem.getPrice() + _salesTax);
        };

        return {
            getBasketItem: _getBasketItem,
            getSalesTax: _getSalesTax,
            getPriceIncludingSalesTax: _getPriceIncludingSalesTax
        };
    };
}());
