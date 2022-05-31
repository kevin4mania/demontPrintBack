const { Router } = require("express");
const { enviarArchivos, reimprimirArchivo, archivosFacturasRecibos, archivosFacturasRecibosBIC } = require('../controllers/servicePrintController')

const router = Router();

router.get('/obtenerArchivos', archivosFacturasRecibosBIC);
router.get('/reimpresion/:file', reimprimirArchivo);


module.exports = router;