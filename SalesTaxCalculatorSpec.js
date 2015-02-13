(function(){

    describe("SalesTaxCalculatorTests", function(){

        it("One item with no basic tax and no import duty", function() {
            var calculator = salesTaxes.salesTaxCalculator();
            var receiptDetails = calculator.processBasket([
                salesTaxes.basketItem("Book", 10)
            ]);
            expect(receiptDetails.getSalesTax()).toBe(0);
            expect(receiptDetails.getTotal()).toBe(10);
        });

        it("One item with basic tax but no import duty", function() {
            var calculator = salesTaxes.salesTaxCalculator();
            var receiptDetails = calculator.processBasket([
                salesTaxes.basketItem("Book", 10, salesTaxes.BASIC_TAX)
            ]);
            expect(receiptDetails.getSalesTax()).toBe(1);
            expect(receiptDetails.getTotal()).toBe(11);
        });

        it("One item with no basic tax but import duty", function() {
            var calculator = salesTaxes.salesTaxCalculator();
            var receiptDetails = calculator.processBasket([
                salesTaxes.basketItem("Book", 10, salesTaxes.IMPORT_DUTY)
            ]);
            expect(receiptDetails.getSalesTax()).toBe(0.5);
            expect(receiptDetails.getTotal()).toBe(10.5);
        });
    });
}());
