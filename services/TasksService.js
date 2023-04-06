const tasksSchema = require('../schema/TasksServicesSchema.js')



class AcceptanseServices {

    async add(tasksData) {
        //    Добавлене новой услуги в БД  
        for (let key in tasksData) {
            if (tasksData[key] == null || tasksData[key] === ''){
                return {message : "поле или несколько полей не заполнены"}
            } 
        }
        const result = await tasksSchema.create(tasksData)
        return {message : "успешно", result}
    }

    //    Получение списка всех услуг из бд
    async getAll() {
        const result = await tasksSchema.find();
        if (result == "") {
            return {message : "Пусто"}
        } 
        return result
    }

     //    Получение списка всех найденных данных из бд 
     async search(query) {
        const result = await tasksSchema.find(query)
        if (result == "") {
            return {message : "Не найдено"}
        }
        return { message: "Найдено", result}
    }

    //    редактирование услуги
    async update(tasksData) {
        
        const result = await tasksSchema.findByIdAndUpdate(tasksData._id, tasksData, { new: true });
        if (!result) {
            return { message :"id не найден"}
        }
        return { message :"успешно"}
    }

   

    //    Удаление данных из БД
    async delete(id) {
        const result = await tasksSchema.findByIdAndDelete(id)
        if (!result) {
            return { message :"id не найден"}
        }
        return { message :"Удалено"}
    }
}
module.exports = new AcceptanseServices();