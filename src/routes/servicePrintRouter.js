const { Router } = require("express");
const { enviarArchivos, reimprimirArchivo, archivosFacturasRecibos } = require('../controllers/servicePrintController')

const router = Router();

router.get('/obtenerArchivos', archivosFacturasRecibos);
router.get('/reimpresion/:file', reimprimirArchivo);


module.exports = router;