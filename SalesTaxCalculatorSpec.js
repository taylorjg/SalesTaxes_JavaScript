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

        it("Rounding test 1", function() {
            var calculator = salesTaxes.salesTaxCalculator();
            var receiptDetails = calculator.processBasket([
                salesTaxes.basketItem("Music CD", 14.99, salesTaxes.BASIC_TAX)
            ]);
            expect(receiptDetails.getSalesTax()).toBe(1.5);
            expect(receiptDetails.getTotal()).toBe(16.49);
        });

        it("Rounding test 2", function() {
            var calculator = salesTaxes.salesTaxCalculator();
            var receiptDetails = calculator.processBasket([
                salesTaxes.basketItem("Box of imported chocolates", 11.25, salesTaxes.IMPORT_DUTY)
            ]);
            expect(receiptDetails.getSalesTax()).toBe(0.60);
            expect(receiptDetails.getTotal()).toBe(11.85);
        });

        it("First example", function() {
            var calculator = salesTaxes.salesTaxCalculator();
            var receiptDetails = calculator.processBasket([
                salesTaxes.basketItem("Book", 12.49),
                salesTaxes.basketItem("Music CD", 14.99, salesTaxes.BASIC_TAX),
                salesTaxes.basketItem("Chocolate bar", 0.85)
            ]);
            expect(receiptDetails.getReceiptItems()[0].getPriceIncludingSalesTax()).toBe(12.49);
            expect(receiptDetails.getReceiptItems()[1].getPriceIncludingSalesTax()).toBe(16.49);
            expect(receiptDetails.getReceiptItems()[2].getPriceIncludingSalesTax()).toBe(0.85);
            expect(receiptDetails.getSalesTax()).toBe(1.5);
            expect(receiptDetails.getTotal()).toBe(29.83);
        });

        it("Second example", function() {
            var calculator = salesTaxes.salesTaxCalculator();
            var receiptDetails = calculator.processBasket([
                salesTaxes.basketItem("Imported box of chocolates", 10, salesTaxes.IMPORT_DUTY),
                salesTaxes.basketItem("Imported bottle of perfume", 47.50, salesTaxes.BASIC_TAX, salesTaxes.IMPORT_DUTY)
            ]);
            expect(receiptDetails.getReceiptItems()[0].getPriceIncludingSalesTax()).toBe(10.50);
            expect(receiptDetails.getReceiptItems()[1].getPriceIncludingSalesTax()).toBe(54.65);
            expect(receiptDetails.getSalesTax()).toBe(7.65);
            expect(receiptDetails.getTotal()).toBe(65.15);
        });

        it("Third example", function() {
            var calculator = salesTaxes.salesTaxCalculator();
            var receiptDetails = calculator.processBasket([
                salesTaxes.basketItem("Imported bottle of perfume", 27.99, salesTaxes.BASIC_TAX, salesTaxes.IMPORT_DUTY),
                salesTaxes.basketItem("Bottle of perfume", 18.99, salesTaxes.BASIC_TAX),
                salesTaxes.basketItem("Packet of paracetamol", 9.75),
                salesTaxes.basketItem("Box of imported chocolates", 11.25, salesTaxes.IMPORT_DUTY)
            ]);
            expect(receiptDetails.getReceiptItems()[0].getPriceIncludingSalesTax()).toBe(32.19);
            expect(receiptDetails.getReceiptItems()[1].getPriceIncludingSalesTax()).toBe(20.89);
            expect(receiptDetails.getReceiptItems()[2].getPriceIncludingSalesTax()).toBe(9.75);
            expect(receiptDetails.getReceiptItems()[3].getPriceIncludingSalesTax()).toBe(11.85);
            expect(receiptDetails.getSalesTax()).toBe(6.70);
            expect(receiptDetails.getTotal()).toBe(74.68);
        });
    });
}());
