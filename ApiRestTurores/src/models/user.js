const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
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
    tipoTutor:{
        type:String,
        required: true
    },
    codigoTUI:{
        type: Number,
    },
    Turno:{
        type: [String],
    },
    Estado:{
        type: Number, //0, ausente; 1, En turno; 2, En reemplazo
        require : true,
        default: 0
    },
    
    //LUN1-2
    //Falta agregar estadisticas
})

module.exports = mongoose.model('User', userSchema)


//Nombre, ROL, RUT, codigoTUI, TURNO**, cargo, tipo, estadisticas.


// {
//     "name": "garaaaaa",
//     "ROL": "202104664-k",
//     "RUT": "206034543-2",
//     "codigoTUI": 12312321,
//     "Turno": ["LU-3-4","MI-7-8"],
//     "Estado": 0
//   }

//Crear SCHEMA DE REGISTROS
//Intentar conectar con el portal