const express = require("express")
const userSchema = require ('../models/user')

const router = express.Router();

//Agregar tutor

router.post('/tutores', (req, res) =>{
    const user = userSchema(req.body);
    user.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
});


//Seleccionar todos los usuarios

router.get('/tutores', (req, res) =>{
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});


//Seleccionar un tutor de la base de datos

router.get("/tutores/:id", (req,res) =>{
    const {id} = req.params;
    userSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Actualizar estado de turno tutor normal

router.put("/tutores/state/:id", (req,res) =>{
    const {id} = req.params;
    const{Estado} = req.body;
    userSchema.updateOne({_id: id},{$set: {Estado}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Buscar tutores del turno actual (Día y Bloque)
router.get('/tutores/:day/:block', (req, res) =>{

    const {day, block} = req.params
    
    shiftSchema
    .findOne({day: day, block: block})
    .then((tutorsId) => {
        userSchema
        .find({_id: { $in: tutorsId}})
        .then((data) => res.json(data))
        .cath((error) => res.json({message:error}))
    })
    .catch((error) => res.json({message:error}));
});

//Buscar tutores por estado 1 o 2 (en turno o en reemplazo respectivamente)

router.get('/tutores/working', (req, res) =>{
    userSchema
    .find({ Estado: { $in: [1,2]}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Buscar tutores del bloque y activos (estado 1 o 2)

router.get('/tutores/working/:day/:block', (req, res) =>{

    const {day, block} = req.params

    shiftSchema
    .findOne({day: day, block: block})
    .then((tutorsId) => {
        userSchema
        .find({   
            $or: [
                {_id: { $in: tutorsId}},
                { Estado: { $in: [1,2]} }
            ]
        })
        .then((data) => res.json(data))
        .cath((error) => res.json({message:error}))
    })
    .catch((error) => res.json({message:error}));
});


module.exports = router;