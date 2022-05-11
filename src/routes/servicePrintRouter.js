const { Router } = require("express");
const { enviarArchivos, reimprimirArchivo } = require('../controllers/servicePrintController')

const router = Router();

router.get('/obtenerArchivos', enviarArchivos);
router.get('/reimpresion/:file', reimprimirArchivo);


module.exports = router;