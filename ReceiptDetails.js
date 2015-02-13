(function(){

    window.salesTaxes = window.salesTaxes || {};

    window.salesTaxes.receiptDetails = function(receiptItems) {

        var _receiptItems = receiptItems;

        var _getReceiptItems = function() {
            return _receiptItems;
        };

        var _getTotal = function() {
            var total = 0;
            _receiptItems.forEach(function(receiptItem) {
                total += receiptItem.getPriceIncludingSalesTax();
            });
            return salesTaxes.mathUtils.toPrecision(total);
        };

        var _getSalesTax = function() {
            var salesTax = 0;
            _receiptItems.forEach(function(receiptItem) {
                salesTax += receiptItem.getSalesTax();
            });
            return salesTaxes.mathUtils.toPrecision(salesTax);
        };

        return {
            getReceiptItems: _getReceiptItems,
            getTotal: _getTotal,
            getSalesTax: _getSalesTax
        };
    };
}());
