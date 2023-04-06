// Данные организациий
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const organizationsDataSchema = new Schema ({ 
    // Статус
    /* status: {
         ref: 'status',
         type: Schema.Types.ObjectId,
         required: true 
     },*/
    // Вид организации
    typeOrganization: {
        type: String,
        enum: ['ИП', 'ООО'],
        require: true
    },
    // имя организации  
    nameOrganization: {
        type: String,
        required: true,
        max: 100
    },
    // ИНН
    inn: {
        type: Number,
        required: true,
        min: 10,
        max: 10
    },
    // ОГРН
    ogrn: {
        type: Number,
        required: true,
        min: 13,
        max: 13
    },
    // Юридический адрес
    legalAddress: {
        type: String,
        max: 200
    },
    // Логотип
    imgLogoOrganization: {
        type: String,
        default: ''
    },
})

module.exports = mongoose.model('organizationData',organizationsDataSchema)