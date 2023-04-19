module.exports = class TasksDto {
  serviceTypes;
  servicePrice;
  commentAcceptServices;
  
  
    constructor(model) {
      this.serviceTypes = model.serviceTypes;
      this.servicePrice = model.servicePrice;
      this.commentAcceptServices = model.commentAcceptServices;
    }
};
