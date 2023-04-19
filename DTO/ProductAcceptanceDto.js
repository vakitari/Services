module.exports = class ProductAcceptanceDto {
    quantityExpected;
    
      constructor(model) {
        this.quantityExpected = model.quantityExpected;

      }
  };
  