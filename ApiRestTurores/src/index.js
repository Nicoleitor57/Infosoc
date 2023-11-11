const express = require('express')
const mongoose = require("mongoose")
require("dotenv").config();
const rutaTutores = require("./routes/tutor")

const app = express();

const port = process.env.port || 9000

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Aquí puedes especificar el dominio permitido
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

//middlware
app.use(express.json());
app.use('/api', rutaTutores)


app.get('/', (req,res) =>{
    res.send("Welcome to my API");
})

//mongodb connection

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Conneted to MONGODB")).catch((error) => console.error(error));

app.listen(9000, () => console.log(`server on port ${port}`))



