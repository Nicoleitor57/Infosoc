const mongoose = require("mongoose")

const registroSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ROL: {
        type: String,
        required:true
    },
    RUT:{
        type:String,
        required: true
    },
    codigoTUI:{
        type: Number,
        required: true
    },
    Turno:{
        type: [String],
        required: true
    },
    Estado:{
        type: Number, //0, ausente; 1, En turno; 2, En reemplazo
        require : true,
        default: 0
    },
    
})

module.exports = mongoose.model('registro', registroSchema)