(function(){

    window.salesTaxes = window.salesTaxes || {};

    window.salesTaxes.receiptItem = function(basketItem, priceIncludingSalesTax) {

        var _basketItem = basketItem;
        var _priceIncludingSalesTax = priceIncludingSalesTax;

        var _getBasketItem = function() {
            return _basketItem;
        };

        var _getPriceIncludingSalesTax = function() {
            return _priceIncludingSalesTax;
        };

        return {
            getBasketItem: _getBasketItem,
            getPriceIncludingSalesTax: _getPriceIncludingSalesTax
        };
    };
}());
