const responseAPI = require("../network/response");
const config = require("../config/gestorImpresion");
const fs = require("fs");
const { main } = require("./demonPrintController");

let enviarArchivos = async(req, res) => {
    try {
        // let arrCarpetas = [];
        let arrArchivos = [];
        let arrArchivosJson = [];
        config.Documentos.find((d) => {
            let archivos = fs.readdirSync(`${config.RutaCarpetaRespaldosArchivosLeidos}/${d.carpeta}`);
            if (archivos.length != 0) {
                arrArchivos.push(archivos);
            }
        });
        arrArchivos = arrArchivos.flat();
        for (let va of arrArchivos) {
            arrArchivosJson.push({ name: va });
        }
        responseAPI.success(req, res, "Archivos Listos", arrArchivosJson);
    } catch (error) {
        responseAPI.error(req, res, "Ocurrio un error al cargar archivos", "999", error);
    }
};

let archivosFacturasRecibos = async(req, res) => {
    console.log("METODO")
    try {
        let arrArNFacturaJson = [];
        //\\172.21.40.5\smm\Respaldos
        //let archivos = fs.readdirSync(`${config.RutaCarpetaRespaldosArchivosLeidos}/FACTURAS-RECIBOS`);
        let archivos = fs.readdirSync(`\\\\172.21.40.5\\smm\\Respaldos`);
        console.log("Arch",archivos)
        for (let va of archivos) {
            let ext=va.split('.')[1];
            if(ext=='REC'){
                //const data = fs.readFileSync(`${config.RutaCarpetaRespaldosArchivosLeidos}/FACTURAS-RECIBOS/${va}`, { encoding: config.configuracionGestor.formatoLectura, flag: "r" });
                const data = fs.readFileSync(`\\\\172.21.40.5\\smm\\Respaldos/${va}`, { encoding: config.configuracionGestor.formatoLectura, flag: "r" });
                let vecDataLeida = data.split("\n");
                for (let arrlineaTexto of vecDataLeida) {
                    let arrDataFinal = arrlineaTexto.split("=");
                    if (arrDataFinal[0].trim() == "N_RECIBO") {
                        arrArNFacturaJson.push({ name: arrDataFinal[1].trim(), filename: va });
                    }
                    continue;
                }           
            }
            continue;
        }
        responseAPI.success(req, res, "Archivos Listos", arrArNFacturaJson);
    } catch (error) {
        responseAPI.error(req, res, "Ocurrio un error al cargar archivos", "999", error);
    }
};

let reimprimirArchivo = async(req, res) => {
    const { file } = req.params;
    fileExt = file.split(".")[1];
    // let carpeta = config.Documentos.find((doc) => doc.extension == fileExt);
    await main([file], "2")
        .then((r) => {
            responseAPI.success(req, res, "Archivo reimpreso", r);
        })
        .catch((e) => {
            responseAPI.error(req, res, "Ocurrio un error al reimprimir", "0010", e);
        });
};

module.exports = {
    enviarArchivos,
    reimprimirArchivo,
    archivosFacturasRecibos,
};