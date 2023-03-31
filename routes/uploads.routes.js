/*

    ruta: api/uploads
*/

const { Router } = require('express');
const expressfileUpload = require('express-fileupload');

const { fileUpload, retornaImagen } = require('../controllers/uploads.controllers');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.use(expressfileUpload());


router.put('/:tipo/:id', validarJWT , fileUpload );

router.put('/:tipo/:foto', retornaImagen );



module.exports = router;