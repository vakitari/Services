// Приёмки
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const acceptancesShema = new Schema ({
    // Статус
    status: {
        type: String,
        enum: ['вариант 1', 'варинат 2', 'вариант 3', 'вариант 4'],
        default: "", 
        require: true
    },
    // Вид маркетплейса
    typeMP: {
        type: String,
        enum: ['Wildberries', 'OZON', 'Яндекс.Маркет', 'Сбермаркет'],
        default: "",
        require: true
    },
    // Дата приёмки
    dataTimeAcceptance: {
        type: Date,
        require: true
    },
    // ФИО на кого груз
    FIOAcceptance: {
        type: String,
        require: true,
        max: 100,
        min: 2
    },
    // Номер телефона получателя
    numberRecipient: {
        type: String,
        require: true
    },
    // Номер транспортной накладной
    billLadingNumber: {
        type: String,
        require: true
    },
    // Вес ожидаемый
    weightExpected: {
        type: Number,
        require: true
    },
    // Вес фактический
    actualWeight: {
        type: Number,
    },
    // idУслуги Приёмок
    //idAcceptancesServices: [{
    //    ref: 'acceptancesServices',
    //    type: Schema.Types.ObjectId 
    //}],
    // id Товары//
    //idProducts: [{
    //    ref: 'products',
    //    type: Schema.Types.ObjectId
    //}],
    // idСклад ФФ
    //idStorageFF: {
    //    ref: 'storageFF',
    //    require: true,
    //    type: Schema.Types.ObjectId
    //},
    // Счёт
    finalPriceAcceptance: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('acceptances',acceptancesShema)