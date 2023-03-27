const express = require('express');
require('dotenv').config();
const cors = require('cors');

const {dbConnection} = require('./database/config');

// Crear el servidor de express
const app = express();

//Configurar CORS
app.use(cors());

// Lectura y parseo del body
app.use( express.json() );

// Base de Datos
dbConnection();

// LNUSnFp4KFOt1LMG
// mean_user

// Rutas
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/login', require('./routes/auth.routes'));

app.listen(3000, () => console.log('Servidor corriendo en el puerto ' + 3000));
