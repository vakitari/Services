module.exports = class AcceptanceServiceDto {
  serviceTypes;
  servicePrice;
  commentAcceptServices;

  constructor(model) {
    this.serviceTypes = model.serviceTypes;
    this.servicePrice = model.servicePrice;
    this.commentAcceptServices = model.commentAcceptServices;
   
    }
};


const path = require('path');


module.exports = class AcceptDto {
  id;
  name;
  link;


  constructor(model) {
    this.id = model.id;
    this.name = model.name;
    this.link = process.env.SITE_URL + path.join('/images', model.link);
  }
};

  module.exports = class TasksDto {
    id;
    name;
    link;
  
  
    constructor(model) {
      this.id = model.id;
      this.name = model.name;
      this.link = process.env.SITE_URL + path.join('/images', model.link);
    }
};
