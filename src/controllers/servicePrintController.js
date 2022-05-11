const responseAPI = require("../network/response");
const config = require("../config/gestorImpresion");
const fs = require("fs");
const { main } = require("./demonPrintController");

let enviarArchivos = async(req, res) => {
    try {
        let arrCarpetas = [];
        let arrArchivos = [];
        config.Documentos.find((d) => {
            arrCarpetas.push(d.carpeta);
        });
        for (let carpeta of arrCarpetas) {
            let archivos = await fs.readdirSync(
                `${config.RutaCarpetaRespaldosArchivosLeidos}/${carpeta}`
            );
            if (archivos.length != 0) {
                arrArchivos.push(archivos);
            }
        }
        responseAPI.success(req, res, "", arrArchivos);
    } catch (error) {
        responseAPI.error(req, res, "", "999", error);
    }
};

let reimprimirArchivo = async(req, res) => {
    const { file } = req.params;
    fileExt = file.split(".")[1];
    let carpeta = config.Documentos.find((doc) => doc.extension == fileExt);
    await main([file], carpeta.carpeta, '2')
        .then((r) => {
            responseAPI.success(req, res, "", r);
        })
        .catch((e) => {
            responseAPI.error(req, res, "", "0010", e);
        });
};

module.exports = {
    enviarArchivos,
    reimprimirArchivo
};