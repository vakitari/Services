const productAcceptanceShema = require('../schema/ProductAcceptanceSchema.js')



class ProductServices {

    async add(productData) {

        //    Добавлене новой товара в бд
        for (let key in productData) {
            if (productData[key] == null || productData[key] === ''){
                return {message : "поле или несколько полей не заполнены"}
            } 
        }
        const result = await productAcceptanceShema.create(productData)
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
    async update(productData) {
        
        const result = await productAcceptanceShema.findByIdAndUpdate(productData._id, productData, { new: true });
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
}
module.exports = new ProductServices();