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


module.exports = router;


// 
// asdasdsa
// asd