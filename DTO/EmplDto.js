module.exports = class EmplDto {
    surname;
    name;
    login;
    email;
    numberPhone;
    password;
    photo;

    
    
      constructor(model) {
        this.surname = model.surname;
        this.name = model.name;
        this.login = model.login;
        this.email = model.email;
        this.numberPhone = model.numberPhone;
        this.password = model.password;
        this.photo = model.photo;
      }
  };
  