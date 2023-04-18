const employeesSchema = require('../schema/EmployeesSchema.js')



class EmpoyeesService {

    async add(employeesData) {
        //    Добавлене нового Сотрудника в БД  
        for (let key in employeesData) {
            if (employeesData[key] == null || employeesData[key] === ''){
                return {message : "поле или несколько полей не заполнены"}
            } 
        }
        const result = await employeesSchema.create(employeesData)
        return {message : "успешно", result}
    }

    //    Получение списка всех Сотрудников из бд
    async getAll() {
        const result = await employeesSchema.find();
        if (result == "") {
            return {message : "Пусто"}
        } 
        return result
    }

     //    Получение списка всех найденных данных из бд 
     async searchById(emplId) {
        const result = await employeesSchema.findById(emplId)
        if (result == "") {
            return {message : "Не найдено"}
        }
        return { message: "Найдено", result}
    }

    //    Редактирование Сотрудника
    async update(employeesData) {
        
        const result = await employeesSchema.findByIdAndUpdate(employeesData._id, employeesData, { new: true });
        if (!result) {
            return { message :"id не найден"}
        }
        return { message :"успешно"}
    }

   

    //    Удаление данных из БД
    async delete(id) {
        const result = await employeesSchema.findByIdAndDelete(id)
        if (!result) {
            return { message :"id не найден"}
        }
        return { message :"Удалено"}
    }
}
module.exports = new EmpoyeesService();