const organizationsDataShema = require('../schema/organizationsDataSchema.js')



class OrganizationsServices {
    
 //    Добавлене новой организации пользователей в бд
    async add(organizationsData) {
        for (let key in organizationsData) {
            if (organizationsData[key] == null || organizationsData[key] === ''){
                return {message : "поле или несколько полей не заполнены"}
            } 
        }
        const result = await organizationsDataShema.create(organizationsData)
        return {message : "успешно", result}
    }

        //    Получение списка всех данных организации пользователей из бд
    async getAll() {
        const result = await organizationsDataShema.find();
        if (result == "") {
            return {message : "Пусто"}
        } 
        return result
    }

     //    Получение списка всех найденных данных из бд 
     async search(query) {
        const result = await organizationsDataShema.find(query)
        if (result == "") {
            return {message : "Не найдено"}
        }
        return { message: "Найдено", result}
    }

        //    редактирование организации пользователей
    async update(organizationsData) {
        
        const result = await organizationsDataShema.findByIdAndUpdate(organizationsData._id, organizationsData, { new: true });
        if (!result) {
            return { message :"id не найден"}
        }
        return { message :"успешно"}
    }

   

     //    Удаление организации пользователей из БД
    async delete(id) {
        const result = await organizationsDataShema.findByIdAndDelete(id)
        if (!result) {
            return { message :"id не найден"}
        }
        return { message :"Удалено"}
    }
}
module.exports = new OrganizationsServices();