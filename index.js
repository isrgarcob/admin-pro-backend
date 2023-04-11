const express = require('express');
require('dotenv').config();
const cors = require('cors');

const {dbConnection} = require('./database/config');

// Crear el servidor de express
const app = express();

//Configurar CORS
app.use(cors());

// Carpeta publica
app.use( express.static('public') )

// Lectura y parseo del body
app.use( express.json() );

// Base de Datos
dbConnection();

// DfZj2NvitBDRzTP5
// mean_user

// Rutas
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/login', require('./routes/auth.routes'));
app.use('/api/hospitales', require('./routes/hospitales.routes'));
app.use('/api/medicos', require('./routes/medicos.routes'));
app.use('/api/todo', require('./routes/busquedas.routes'));
app.use('/api/upload', require('./routes/uploads.routes'));

app.listen(3000, () => console.log('Servidor corriendo en el puerto ' + 3000));
