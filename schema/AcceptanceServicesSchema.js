const {Schema,model} = require('mongoose')

const acceptanceServicesShema = new Schema ({
    // Вид улсуги
    serviceTypes: {
        type: String,
        require: true
    },
    // Цена за услугу
    servicePrice: {
        type: String,
        require: true
    },
    //Комментарий
    commentAcceptServices: {
        type: String,
        max: 400
    }
})

module.exports = model('acceptanceServicesShema',acceptanceServicesShema)
