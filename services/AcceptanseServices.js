const acceptanceServicesShema = require('../schema/AcceptancesSchema.js')



class AcceptanseServices {

    async add(acceptanseData) {
        //    Добавлене новой Приёмки в БД  
        for (let key in acceptanseData) {
            if (acceptanseData[key] == null || acceptanseData[key] === ''){
                return {message : "поле или несколько полей не заполнены"}
            } 
        }
        const result = await acceptanceServicesShema.create(acceptanseData)
        return {message : "успешно", result}
    }

    //    Получение списка всех Приёмок из бд
    async getAll() {
        const result = await acceptanceServicesShema.find();
        if (result == "") {
            return {message : "Пусто"}
        } 
        return result
    }

     //    Получение списка всех найденных данных из бд 
     async search(query) {
        const result = await acceptanceServicesShema.find(query)
        if (result == "") {
            return {message : "Не найдено"}
        }
        return { message: "Найдено", result}
    }

    //    редактирование Приёмки
    async update(acceptanseData) {
        
        const result = await acceptanceServicesShema.findByIdAndUpdate(acceptanseData._id, acceptanseData, { new: true });
        if (!result) {
            return { message :"id не найден"}
        }
        return { message :"успешно"}
    }

   

    //    Удаление данных из БД
    async delete(id) {
        const result = await acceptanceServicesShema.findByIdAndDelete(id)
        if (!result) {
            return { message :"id не найден"}
        }
        return { message :"Удалено"}
    }
}
module.exports = new AcceptanseServices();