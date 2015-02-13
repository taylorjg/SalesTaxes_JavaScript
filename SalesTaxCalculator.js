(function(){

    window.salesTaxes = window.salesTaxes || {};

    window.salesTaxes.salesTaxCalculator = function() {

        var _processBasket = function(basketItems) {
            var receiptItems = [];
            basketItems.forEach(function(basketItem) {
                var salesTax = _calculateSalesTax(basketItem);
                var receiptItem = salesTaxes.receiptItem(basketItem, salesTax);
                receiptItems.push(receiptItem);
            });
            return salesTaxes.receiptDetails(receiptItems);
        };

        var _salesTaxPercentages = [
            10, // index = salesTaxes.BASIC_TAX
            5   // index = salesTaxes.IMPORT_DUTY
        ];

        var _calculateSalesTax = function(basketItem) {
            var percentage = 0;
            basketItem.getSalesTaxTypes().forEach(function(stt) {
                percentage += _salesTaxPercentages[stt];
            });
            return _calculatePercentage(basketItem.getPrice(), percentage);
        };

        var _calculatePercentage = function(n, p) {
            return n * p / 100;
        };

        var _roundUp = function(n) {
            return Math.ceil(n * 20) / 20;
        };

        return {
            processBasket: _processBasket
        };
    };
}());
