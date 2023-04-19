module.exports = class AcceptDto {
    status;
    typeMP;
    FIOAcceptance;
    numberRecipient;
    billLadingNumber;
    weightExpected;
    finalPriceAcceptance;

  
    constructor(model) {
      this.status = model.status;
      this.typeMP = model.typeMP;
      this.FIOAcceptance = model.FIOAcceptance;
      this.numberRecipient = model.numberRecipient;
      this.billLadingNumber = model.billLadingNumber;
      this.weightExpected = model.weightExpected;
      this.finalPriceAcceptance = model.finalPriceAcceptance;
    }
  };

