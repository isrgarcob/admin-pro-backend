const express = require('express');
require('dotenv').config();
const cors = require('cors');

const {dbConnection} = require('./database/config');

// Crear el servidor de express
const app = express();

//Configurar CORS
app.use(cors());

// Base de Datos
dbConnection();

// LNUSnFp4KFOt1LMG
// mean_user

// Rutas
app.get( '/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })

});


app.listen(3000, () => console.log('Servidor corriendo en el puerto ' + 3000));
