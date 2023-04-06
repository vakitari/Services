// Товары в приёмках
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productInAcceptanceShema = new Schema ({
    // Статус 
    // status: {
    //     ref: 'status',
    //     type: Schema.Types.ObjectId
    // },
    // // Товары
    // idProduct: {
    //     ref: 'product',
    //     type: Schema.Types.ObjectId
    // },
    // Ожидаемое количество
    quantityExpected: {
        type: Number,
        require: true 
    },
    // Приёмки
    // idAcceptance: {
    //     ref: 'acceptance',
    //     type: Schema.Types.ObjectId
    // }
})

module.exports = mongoose.model('productInAcceptance',productInAcceptanceShema)