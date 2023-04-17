const productAcceptanceShema = require('../schema/ProductAcceptanceSchema.js')



class ProcessServises {

    async add(processData) {

        //    Добавлене новой товара в бд
        for (let key in processData) {
            if (processData[key] == null || processData[key] === ''){
                return {message : "поле или несколько полей не заполнены"}
            } 
        }
        const result = await productAcceptanceShema.create(processData)
        return {message : "успешно", result}
    }

        //    Получение списка всех товаров из бд
    async getAll() {
        const result = await productAcceptanceShema.find();
        if (result == "") {
            return {message : "Пусто"}
        } 
        return result
    }

         //    Получение списка всех найденных товаров из бд 
     async search(query) {
        const result = await productAcceptanceShema.find(query)
        if (result == "") {
            return {message : "Не найдено"}
        }
        return { message: "Найдено", result}
    }

       //    редактирование товара
    async update(processData) {
        
        const result = await productAcceptanceShema.findByIdAndUpdate(processData._id, processData, { new: true });
        if (!result) {
            return { message :"id не найден"}
        }
        return { message :"успешно"}
    }

   

       //    Удаление товара из БД
    async delete(id) {
        const result = await productAcceptanceShema.findByIdAndDelete(id)
        if (!result) {
            return { message :"id не найден"}
        }
        return { message :"Удалено"}
    }

    async searchById(id) {
        const result = await productAcceptanceShema.findById(id)
        if (!result) {
            return { message :"id не найден"}
        }
        return { message :"Найдено" , result}
    }

    async findProcessByIdAndOptionalParam(processData) {
        const process = await Items.find({idClietns:processData})
        const ids = product.map(process => process._id);
        const processItems = await process.find({idProducts:{$in:ids}})
        return {processItems:processItems}
        }
}


module.exports = new ProcessServises();