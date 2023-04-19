module.exports = class OrganizationsDataDto {
    typeOrganization;
    nameOrganization;
    inn;
    ogrn;
    legalAddress;
    imgLogoOrganization;
    
      constructor(model) {
        this.typeOrganization = model.typeOrganization;
        this.nameOrganization = model.nameOrganization;
        this.inn = model.inn;
        this.ogrn = model.ogrn;
        this.legalAddress = model.legalAddress;
        this.imgLogoOrganization = model.imgLogoOrganization;
      }
  };
  